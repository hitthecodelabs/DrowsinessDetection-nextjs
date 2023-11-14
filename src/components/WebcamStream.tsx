// src/components/WebcamStream.tsx

import { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import { playAlarm } from '@/utils/alarm';

interface WebcamStreamProps {
  isActive: boolean;
}

interface Point {
  x: number;
  y: number;
}

const WebcamStream = ({ isActive }: WebcamStreamProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  let stream: MediaStream | null = null;
  let intervalId: NodeJS.Timeout | null = null;

  useEffect(() => {
    const loadModels = async () => {
      try {
        // Replace these lines with the correct model URIs
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models/tiny_face_detector_model-weights_manifest.json');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models/face_landmark_68_model-weights_manifest.json');
        await faceapi.nets.tinyYolov2.loadFromUri("/models/tiny_yolov2_model-weights_manifest.json");
        // Load other necessary models
      } catch (e) {
        console.error('Error loading face-api models:', e);
      }
    };

    const detectDrowsiness = async () => {
      if (!videoRef.current || !stream) return;
      
      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();

      if (detections.length > 0) {
        const landmarks = detections[0].landmarks;
        const leftEye = landmarks.getLeftEye();
        const rightEye = landmarks.getRightEye();

        const earLeft = calculateEAR(leftEye);
        const earRight = calculateEAR(rightEye);

        if (earLeft < 0.20 && earRight < 0.20) { // Threshold for drowsiness
          playAlarm();
        }
      }
    };

    const calculateEAR = (eyeLandmarks: Point[]) => {
      const eyeWidth = faceapi.euclideanDistance(
        [eyeLandmarks[0].x, eyeLandmarks[0].y], 
        [eyeLandmarks[3].x, eyeLandmarks[3].y]
      );
    
      const eyeHeight1 = faceapi.euclideanDistance(
        [eyeLandmarks[1].x, eyeLandmarks[1].y], 
        [eyeLandmarks[5].x, eyeLandmarks[5].y]
      );
    
      const eyeHeight2 = faceapi.euclideanDistance(
        [eyeLandmarks[2].x, eyeLandmarks[2].y], 
        [eyeLandmarks[4].x, eyeLandmarks[4].y]
      );
    
      return (eyeHeight1 + eyeHeight2) / (2.0 * eyeWidth);
    };

    const getVideo = async () => {
      if (isActive && !stream) {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await loadModels(); // Ensure models are loaded
          intervalId = setInterval(detectDrowsiness, 500); // Run detection every 500ms
        }
      } else if (!isActive && stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        if (intervalId) clearInterval(intervalId);
      }
    };

    getVideo();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
      }
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive]);
  return (
    <div className="relative flex justify-center items-center bg-gray-200">
      <video ref={videoRef} autoPlay className="w-full h-auto border border-gray-300 shadow-lg" />
      {!isActive && (
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-lg text-gray-500">Camera is off</span>
        </div>
      )}
    </div>
  );
};

export default WebcamStream;
