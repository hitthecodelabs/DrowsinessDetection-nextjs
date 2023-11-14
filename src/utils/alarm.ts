// src/utils/alarm.ts

export const playAlarm = () => {
    let audioContext: AudioContext;
  
    // Check for support of AudioContext in the browser.
    if ('AudioContext' in window) {
      audioContext = new AudioContext();
    } else if ('webkitAudioContext' in window) {
      // Fallback for older webkit-based browsers
      audioContext = new (window as any).webkitAudioContext();
    } else {
      console.error('Web Audio API is not supported in this browser');
      return;
    }
  
    // Your existing alarm sound logic...
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Standard A note
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2); // Play for 2 seconds
  };
  