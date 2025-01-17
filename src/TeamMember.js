import React from 'react';

const TeamMember = ({ name, position, imgSrc, socialLink }) => {
    return (
        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="relative overflow-hidden px-6">
                    <img src={imgSrc} className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
                </div>
                <div className="pt-6 text-center">
                    <p className="text-lg leading-normal font-bold mb-1">{name}</p>
                    <p className="text-gray-500 leading-relaxed font-light">{position}</p>
                    <div className="mt-2 mb-5 space-x-2">
                        <a className="hover:text-blue-700" aria-label="Instagram link" href={socialLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
