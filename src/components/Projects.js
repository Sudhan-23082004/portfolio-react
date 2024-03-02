import websiteImg1 from '../assets/Astronomy.jpg';
import websiteImg2 from '../assets/Weather.png';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Astronomical Data Science using Python.',
                link: 'https://github.com/Sudhan-23082004/Astronomical_Datascience_using_Python.git'
            },
            {
                image: websiteImg2,
                description: 'Weather Application using JavaFX',
                link: 'https://github.com/Sudhan-23082004/Weather-Application.git'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary rounded-xl ml-2 mr-2 mb-2 text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary font-hero-font mb-5 w-[128px] ">Projects</h1>
                <p>The projects are listed below.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5 '>
                {config.projects.map((project) => (
                     <div className='relative h-[200px] w-[500px] '>
                        <img className='rounded-xl h-[200px] w-[500px] ' src={project.image}/>
                        <div className='project-desc '>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}