import React from 'react';
import QRCODE from './components/QR.jpg';

const QR = () => (
  <div className="bg-full min-h-screen bg-no-repeat bg-cover bg-center bg-[url('components/Background.jpg')] flex items-center justify-center flex-col">
    <img src={QRCODE} className="w-[80%] max-w-[600px] h-auto scale-x-[1.2] rounded-[50px] mb-[1rem]" alt="KMBA Lunar" />
    <h1 className="text-white text-xl font-semibold">Show This To Event's Guard</h1>
  </div>
);

export default QR;
