export default function Footer() {
    return (
        <>
            <hr className='border border-gray-100'/>
            <div className='flex justify-between text-slate-300' id="contacts">
                <span><p className='my-10 font-thin'>© Coded by Sera and hosted on GitHub. All rights reserved.</p></span>
                <span className='text-3xl my-8'><a href="https://github.com/Sera-iso/coffee-to-go" target="_blank" rel="noreferrer"><i className='fa-brands fa-github px-6'></i></a>
                <a href="mailto:someone@yoursite.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope px-6"></i></a></span>
            </div>
        </>
    )
}