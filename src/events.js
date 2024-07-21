import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import background from './components/Background.jpg';
import event1 from './eventphoto/KMBA Lunar.jpg';
import event2 from './eventphoto/comstud.jpg';
import event3 from './eventphoto/ppd.JPG';
import event4 from './eventphoto/vesakh.JPG';
import event5 from './eventphoto/wd.jpg';
import event6 from './eventphoto/wd.jpg';
import event7 from './eventphoto/birthday.jpg';
import event8 from './eventphoto/tba.jpg';
import event9 from './eventphoto/Bonding.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    GLightbox({ selector: '.glightbox3' });
  }, []);

  const events = [
    { src: event1, alt: "Lunar New Year", title: "Lunar New Year", month: "February" },
    { src: event2, alt: "Comstud", title: "Comstud", month: "March" },
    { src: event3, alt: "PPD", title: "PPD", month: "May" },
    { src: event4, alt: "Vesakh", title: "Vesakh", month: "June" },
    { src: event5, alt: "Farewell Senior", title: "Farewell Senior", month: "July" },
    { src: event6, alt: "KMBA Day", title: "KMBA Day", month: "September" },
    { src: event7, alt: "KMBA Birthday", title: "KMBA Birthday", month: "November" },
    { src: event8, alt: "Farewell Cabinet", title: "Farewell Cabinet", month: "January" },
    { src: event9, alt: "KMBA on The Road", title: "KMBA on The Road", month: "IF we want" },
    { src: event8, alt: "Regen", title: "Regen", month: "-" },
  ];

  return (
    <div className="bg-full min-h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <Navbar />

      <div className="text-center mx-auto mb-12 lg:px-20 mt-10">
        <h2 className="text-2xl leading-normal mb-2 font-bold text-white py-4">KMBA Events</h2>
      </div>

      <div className="flex flex-wrap flex-row">
        {events.map((event, index) => (
          <figure
            key={index}
            className={`flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp`}
            data-wow-duration="1s"
            data-wow-delay={`${0.1 * index}s`}
          >
            {event.title === "Lunar New Year" ? (
            <div className="relative overflow-hidden cursor-pointer mb-6">
              <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Celebrate the Lunar New Year with us! <a href='/login' class='text-blue-500 underline'>Regist Here</a>`} className="glightbox3">
              <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
              <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-red-600 text-center">
              <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                <small className="d-block">{event.month}</small>
              </div>
              </a>
            </div>
            ) : event.title === "Comstud" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Join us for Comstud, a study event like no other!`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "PPD" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join PPD`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "Vesakh" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join PPD`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "Farewell Senior" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join this Event`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "KMBA Day" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join This Event`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "KMBA Birthday" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join This Event`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "Farewell Cabinet" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join This Event`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "KMBA on The Road" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join This Event`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            ) : event.title === "Regen" ? (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: Lets Join This Event`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-blue-600 text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            )
            : (
              <div className="relative overflow-hidden cursor-pointer mb-6">
                <a href={event.src} data-gallery="gallery1" data-glightbox={`title: ${event.title}; description: This is a wider card with supporting text below as a natural lead-in to additional content`} className="glightbox3">
                  <img className="block w-full h-auto transform duration-500 grayscale hover:scale-125" src={event.src} alt={event.alt} />
                  <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
                    <h3 className="text-base leading-normal font-semibold my-1 text-white">{event.title}</h3>
                    <small className="d-block">{event.month}</small>
                  </div>
                </a>
              </div>
            )}
          </figure>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default App;
