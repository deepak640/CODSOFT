import React, { useState } from 'react'
import Layout from "../assets/Layout";
import { useForm } from '@formspree/react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const Contact = () => {
    const [state, handleSubmit] = useForm("mbjvyblb");
    const [value, setValue] = useState()
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <Layout>
            <div className="contact-container">
                <form className="contact-box" onSubmit={handleSubmit}>
                    <div className="left"></div>
                    <div className="right">
                        <h2>Contact Us</h2>
                        <input type="text" name='name' className="field" id="" placeholder='Enter Name' required autoComplete='off' />
                        <input type="email" name='email' className="field" id="" placeholder='Enter Email' required autoComplete='off' />
                        <PhoneInput className='field'
                            placeholder="Enter phone number"
                            defaultCountry='IN'
                            name='phone number'
                            value={value}
                            onChange={setValue} required autoComplete='off' />
                        <textarea className="field area" name='message' id="" cols='20' placeholder='message' required autoComplete='off'></textarea>
                        <button className='btn'>SUBMIT</button>
                    </div>
                </form>
            </div >
        </Layout >

    )
}

export default Contact