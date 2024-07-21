import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import kmbaLunar from './components/KMBA Lunar.jpg';
import logoCabinet from './components/Logo kabinet.jpg'; 
import { Link } from 'react-router-dom';

const Home = () => {
  const redirectToReactPage = () => {
    window.location.href = 'regist/frontend/src/index.js';
  };

  return (
    <>
      <div className="bg-full min-h-screen bg-[url('components/Background.jpg')]">
        <Navbar />
        
        <div className="mt-10 flex justify-center">
          <img src={kmbaLunar} className="w-[80%] max-w-[600px] h-auto scale-x-[1.2] rounded-[50px] mb-[3rem]" alt="KMBA Lunar" />
        </div>
        
        <div className="md:px-22 space-y-6 px-8 text-justify text-white text-base md:text-xl" style={{ paddingLeft: '150px', paddingRight: '150px' }}>
          <p>The Buddhist Student Family (KMB) is an organization formed by Buddhist students in a university. At President University, the Buddhist organization is called KMB Ashokavardhana. KMB Ashokavardhana is engaged in social and religious fields. KMB Ashokavardhana was formed in November 2004 as an official Buddhist Community.</p>
          
        </div>
        
        <h1 className="text-[1.5rem] font-bold text-center text-white">Cabinet 2023/2024</h1>
        
        <div className="flex justify-center items-center gap-4 text-center">
          <div className="w-[256px] h-[256px] rounded-lg mt-10"><img src={logoCabinet} alt="Cabinet Logo" /></div>
          <div className="flex max-w-[20rem] flex-col gap-8 rounded-lg border-2 border-white px-8 py-12 md:max-w-[38rem]">
            <div className="flex items-center gap-4">
              <h1 className="text-white font-400">WILD CABINET</h1>
            </div>
            <div className="flex flex-col gap-2 text-white">
              <h1 className="font-[400]">"For The Glory of Humanity"</h1>
              <h1>We are the protector of the world.</h1>
            </div>
          </div>
        </div>
        
        <a className="flex justify-center items-center py-10" href="wildcabinet.html">
          <Link to="/Wild" className="rounded-lg border-2 border-white px-10 py-2 text-white bg-black hover:bg-purple-500">See Our Cabinet</Link>
        </a>
        
        <div className="space-y-4 max-w-6xl mx-auto pb-10">
          <h1 className="text-white">Frequently Asked Question</h1>
          
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">What is KMBA?</h2>
              <span className="relative size-5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 size-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              A CNC (Club AND Communities) who win <span className="underline">MOST ACTIVE CNC</span> at President University which is under PUSB (President University Student Board) and contains Buddhist students at President University.
            </p>
          </details>
          
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">Who is the advisor of KMBA?</h2>
              <span className="relative size-5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              The advisor of KMBA is Mr.Andika Candra Jaya, B,Sc.IT, M.Kom. Informatics lecture in President University
            </p>
          </details>
          
          <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="font-medium">How many divisions in KMBA?</h2>
              <span className="relative size-5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              We have 5 divisions in our organizational structure including: Board of Directors, Public Relations, Multi Media, Spirituality, SCAU.
            </p>
          </details>
        </div>
        
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
