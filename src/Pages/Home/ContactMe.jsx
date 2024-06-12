import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('_portfolio', '_jayed_portfolio', form.current, {
                publicKey: 'URpBXCcymQQviin_0',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="text-black">
            <div className='flex mx-auto w-1/2'>
                <form className='w-full' ref={form} onSubmit={sendEmail}>
                    <h2 className="text-4xl">Contact Me</h2>
                    <div>
                        <label className='text-white'>Name</label>
                        <input className='w-full p-1' type="text" name="to_name" />
                    </div>
                    <div>
                        <label className='text-white'>Email</label>
                        <input className='w-full p-1' type="email" name="user_email" />
                    </div>
                    <div>
                        <label className='text-white'>Message</label>
                        <textarea className='w-full p-1' name="message" />
                    </div>
                    <input className='flex w-1/3 btn mx-auto ' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

