import React from 'react';
import Navbar from './Navbar';
import LogoWild from './components/Logo kabinet.jpg';
import Footer from './Footer';
import TeamMember from './TeamMember';
import fotocp from './member/Foto CP.jpg';
import fotovcp from './member/VCP.jpg';
import fotosekre from './member/Foto Sekre.jpg';
import fotovcp2 from './member/Foto VCP2.jpg'

const Wild = () => {
    
    const teamMembers = [
        {
            id: 1,
            name: 'Arius Aurelius',
            position: 'Chairperson',
            imgSrc: fotocp,
            instagramLink: 'https://www.instagram.com/arius_aurelius/',
        },
        {
            id: 1,
            name: 'Arnold Martin',
            position: 'Vice Chairperson I',
            imgSrc: fotovcp,
            instagramLink: 'https://www.instagram.com/arnold_m.y/',
        },
        {
            id: 1,
            name: 'Lywen Chandra',
            position: 'Vice Chairperson II',
            imgSrc: fotovcp2,
            instagramLink: 'https://www.instagram.com/lywen_chandra/',
        },
        {
            id: 1,
            name: 'Hartati Viriya',
            position: 'Secretary',
            imgSrc: fotosekre,
            instagramLink: 'https://www.instagram.com/viriyahartati/',
        },
    ];

    return (
        <div className="bg-full min-h-screen bg-[url('components/Background.jpg')]">
            <Navbar />

            <div className="flex justify-center items-center gap-4 text-center">
                <div className="w-[256px] h-[256px] rounded-lg mt-10"><img src={LogoWild} alt="Wild Cabinet Logo" /></div>
                <div className="flex flex-col items-center gap-4 px-10">
                    <h1 className="text-red-600 font-bold text-5xl">WILD CABINET</h1>
                    <h2 className="text-white font-bold text-2xl">"The Second Family is Here"</h2>
                    <h3 className="text-white font-bold text-xl">KMBA Cabinet 2023/2024</h3>
                </div>
            </div>

            <div>
                <h1 className="flex justify-center text-white py-10 text-2xl font-bold">Vision & Mission</h1>
            </div>

            <div className="md:px-22 space-y-6 px-8 text-justify text-white text-base md:text-xl" style={{ paddingLeft: '150px', paddingRight: '150px', paddingBottom: '70px' }}>
                <p>Become a family of students dedicated to understanding, respecting, and practicing Buddhist teachings in everyday life. We aim to create an environment that supports spiritual growth, self-development, and community service as well as fostering unity in KMB Ashokavardana.</p>
            </div>

            <div className="flex flex-wrap flex-row -mx-4 text-center">
                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Creative</h3>
                        <p className="text-gray-500">Make KMB Ashokavardana as a means to exchange ideas and become a means of solving problems</p>
                    </div>
                </div>

                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s">
                    <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Responsibility</h3>
                        <p className="text-gray-500">Ensuring that each division carries out its duties properly and runs smoothly as it should.</p>
                    </div>
                </div>

                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                        <div className="inline-block text-gray-900 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Innovation</h3>
                        <p className="text-gray-500">Implement a system that is effective, efficient and useful for the people of KMB Ashokavardhana.</p>
                    </div>
                </div>
            </div>

            <div>
            <h2 class="flex justify-center text-white py-10 text-2xl font-bold">Member and Division</h2>
            </div>

            <div className="flex flex-wrap justify-center -mx-4">
                {/* Mapping team members into TeamMember component */}
                {teamMembers.map((member) => (
                    <TeamMember
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        imgSrc={member.imgSrc}
                        socialLink={member.instagramLink}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default Wild;
