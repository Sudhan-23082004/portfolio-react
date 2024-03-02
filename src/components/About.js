import AboutImg from '../assets/about.png';
import { useState, useEffect } from 'react';


    export default function About () {
        const [line1, setLine1] = useState('');
        const [line2, setLine2] = useState('');
        const [line3, setLine3] = useState('');

        const config  = {
            line1: 'With the honor of being a distinguished 𝗠𝗲𝗺𝗯𝗲𝗿 𝗼𝗳 𝗡𝗔𝗦𝗔 and the recipient of the esteemed 𝗥𝗮𝗷𝘆𝗮 𝗣𝘂𝗿𝗮𝘀𝗸𝗮𝗿 𝗮𝘄𝗮𝗿𝗱 by the 𝗚𝗼𝘃𝗲𝗿𝗻𝗼𝗿 𝗼𝗳 𝗧𝗮𝗺𝗶𝗹 𝗡𝗮𝗱𝘂, I embody a relentless drive to carve an enduring legacy in the tech sphere. Proficiency in an array of programming languages including 𝗖, 𝗝𝗮𝘃𝗮, 𝗣𝘆𝘁𝗵𝗼𝗻, and 𝗖++, coupled with a deep-rooted passion for 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 and an acute 𝗽𝗿𝗼𝗯𝗹𝗲𝗺-𝘀𝗼𝗹𝘃𝗶𝗻𝗴 prowess, defines my commitment to excellence.',
            line2: 'Currently, on the path of refining my skills through my BE program, I relentlessly pursue the cutting edge of innovation. Eager to forge partnerships with industry stalwarts, my mission is to lend my expertise to revolutionary projects that chart a transformative course for the future.',
            line3: 'In addition to my skill set, I am proficient in React.js, Tailwind CSS + Bootstrap for frontend development, and in the backend, I am well-versed in Node.js, Express.js, and MongoDB. These technologies further augment my capabilities, enabling me to contribute effectively to groundbreaking endeavors in the tech landscape.'
        }

        useEffect(() => {
            const timer1 = setTimeout(() => setLine1(config.line1), 1000);
            const timer2 = setTimeout(() => setLine2(config.line2), 2000);
            const timer3 = setTimeout(() => setLine3(config.line3), 3000);

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
                clearTimeout(timer3);
            };
        }, []);

        return <section className='flex flex-col md:flex-row bg-secondary rounded-xl ml-2 mr-2 mb-2  px-5' id='about'>
            <div className='py-20 md:w-1/2'>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-[#5551e3] font-hero-font mb-5 w-[148px] '>About Me</h1>
                    <p className='pb-5 font-another-font'>{line1}</p>
                    <p className='pb-5 font-another-font'>{line2}</p>
                    <p className='pb-5 font-another-font'>{line3}</p>
                </div>
            </div>
        </section>
    }

