import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            twitter: 'https://twitter.com/SudhanR1442221',
            github: 'https://github.com/Sudhan-23082004',
            linkedin: 'https://www.linkedin.com/in/sudhan23082004/'
        }
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 1.0 } },
    };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { delay: 0.5 } },
        hover: { scale: 1.15, transition: { yoyo: Infinity } }
    };

    return (
        <motion.section
            className='flex flex-col md:flex-row px-5 py-32 bg-[#2f2fa2] rounded-xl ml-2 mr-2 mb-2 justify-center'>
            <motion.div
                className='md:w-1/2 flex flex-col'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='text-[#8d8741]'>Sudhan R</span> 
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <motion.div
                    className='flex py-10'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.a 
                        href={config.social.twitter} 
                        className='pr-5 hover:text-white text-[#8d8741]'
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <FaTwitter size={38} />
                    </motion.a>
                    <motion.a 
                        href={config.social.github} 
                        className='pr-5 hover:text-white text-[#8d8741]'
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <FaGithub size={40}/>
                    </motion.a>
                    <motion.a 
                        href={config.social.linkedin} 
                        className='hover:text-white text-[#8d8741]'
                        variants={iconVariants}
                        whileHover="hover"
                    >
                        <AiOutlineLinkedin size={40}/>
                    </motion.a>
                </motion.div>
            </motion.div>
            <motion.img
                className='md:w-1/3'
                src={HeroImg}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            />
        </motion.section>
    );
}
