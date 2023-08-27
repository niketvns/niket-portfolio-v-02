import { useEffect } from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

const Contact = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className="contact-container">
                <form action="https://formspree.io/f/mvoykedq" method='post'>
                    <h1>Contact</h1>
                    <div className="input-name">
                        <div className="input-box">
                            <span>Name<span className='red'>*</span></span>
                            <div className="input-icon">
                                <span className='icon'><PersonIcon /></span>
                                <input type="text" name='Name' placeholder="Enter Your Name" required autoComplete='off' />
                            </div>
                        </div>
                        <div className="input-box">
                            <span>Email<span className='red'>*</span></span>
                            <div className="input-icon">
                                <input type="email" name='Email' placeholder="example@email.com" required autoComplete='off' />
                                <span className='icon'><EmailIcon /></span>
                            </div>
                        </div>
                        <div className="input-box">
                            <span>Contact</span>
                            <div className='input-icon'>
                                <input type="number" name='Phone' placeholder="+91" />
                                <span className='icon'><CallIcon /></span>
                            </div>
                        </div>
                        <div className="input-box">
                            <span>Message<span className='red'>*</span></span>
                            <div className='input-icon'>
                                <textarea name='Message' placeholder="Enter your message" required />
                                <span className='icon'><MessageIcon /></span>
                            </div>
                        </div>
                    </div>
                    <div className="input-box">
                        <input type="submit" value="Send" />
                    </div>

                </form>
            </div>
        </>
    );
}

export default Contact;