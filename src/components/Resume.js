import ResumeImg from '../assets/resume.jpg';
import { motion } from "framer-motion";

export default function Resume () {
    const config = {
        resumeLink: 'https://drive.google.com/file/d/1_gcCLE_r_TzX6Ts8od7Xi3kkeeKKbtvs/view?usp=sharing',
        certificationsLink: 'https://drive.google.com/drive/folders/1Ju3dPo8XfxjEHITRdy-HpAl80KU765QZ?usp=sharing'
    }

    return (
        <section id='resume' className='flex flex-col md:flex-row bg-[#00ABE4] rounded-xl ml-2 mr-2 mb-2 px-5 py-10 gap-14'>
            <div className='md:w-1/2 flex justify-center md:justify-end '>
                <img className='w-[300px] rounded-xl' src={ResumeImg} />
            </div>
            
            <div className='flex flex-col gap-4 justify-center  text-white'></div>
            
            <div className='flex flex-col gap-4 justify-center  text-white'>
                <div class="flex flex-row">
                    <h1 className='text-4xl border-b-4 border-primary mb-5 ml-50 w-[116px] font-hero-font'>Resume</h1>
                </div>
                <div class="flex flex-row gap-6">
                    <motion.a 
                        className='btn hover:bg-[#8d8741]' 
                        href={config.resumeLink} 
                        download
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Download Resume
                    </motion.a>
                    <motion.a 
                        className='btn hover:bg-[#8d8741]' 
                        href={config.certificationsLink} 
                        download
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Download Certifications
                    </motion.a>
                </div>
            </div>
        </section>
    );
}