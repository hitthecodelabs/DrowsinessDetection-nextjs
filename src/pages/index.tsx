// src/pages/index.tsx

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';

// Dynamically import the WebcamStream component without SSR
const WebcamStreamNoSSR = dynamic(
  () => import('@/components/WebcamStream'),
  { ssr: false }
);

const Home = () => {
  const [isWebcamActive, setWebcamActive] = useState(false);

  const toggleWebcam = () => {
    setWebcamActive(!isWebcamActive);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">IA Detector de Sueño</h1>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className={`${isWebcamActive ? 'block' : 'hidden'}`}>
                {/* Use the dynamically imported WebcamStream component */}
                <WebcamStreamNoSSR isActive={isWebcamActive} />
              </div>
              <div className="p-4">
                <p className="text-lg mb-4">Stay alert with our AI-powered drowsiness detector.</p>
                <button 
                  className={`w-full py-2 text-white font-bold rounded transition duration-150 ease-in-out ${isWebcamActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                  onClick={toggleWebcam}
                >
                  {isWebcamActive ? 'Pause Detector' : 'Start Detector'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
