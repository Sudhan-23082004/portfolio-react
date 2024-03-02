
export default function Contact () {

    const config = {
        email : <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSDZBPTmFGpkmlzpcQTvDkRwDbMCVvQNSdJkKkSFHpnBpGnmgKssdzCwvKjWcbZdRFHkJJNw" target="_blank" rel="noopener noreferrer" className='font-another-font'>rajansudhan0@gmail.com</a>,
        phone: <span className='font-another-font'>9940980978</span>
    }

    return <section id='contact' className='flex flex-col bg-[#00DD00] rounded-xl ml-2 mr-2 mb-2 px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-6xl  mb-5 w-[195px] font-hero-font'>Contact</h1>
            <p className='pb-5 font-Acme text-2xl'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'><span className='font-semibold font-another-font'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-semibold font-another-font'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}