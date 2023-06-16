import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () =>{
    let name = useRef();
    let email = useRef();
    let message = useRef();
    let form = useRef();
    const formHandler = (e) =>{
        e.preventDefault();
        console.log("name:",name.current.value,"email:",email.current.value,'message:',message.current.value)
        emailjs.sendForm('service_ehfw2ma', 'template_2669vj9', form.current, 'VmaP3bAcIOVJgG3s9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return <section className='contact' id='contact'>
            <div className='contact_details'>
                <a href="mailto:nsinghrajput@gmail.com" className="nav_link">
                    <i className="uil uil-envelope"></i>
                    <span className='nav_item'>Email</span>
                    <h4>nsinghrajputx@gmail.com</h4>
                </a>
                <a href="mailto:nsinghrajput@gmail.com" className="nav_link">
                    <i className="uil uil-message"></i>
                    <span className='nav_item'>Messanger</span>
                    <h4>NEERAJ SINGH RAJPUT</h4>
                </a>
                <a href="https://wa.me/9752661779" className="nav_link">
                    <i className="uil uil-whatsapp"></i>
                    <span className='nav_item'>Whatsapp</span>
                    <h4>+91 9752661779</h4> 
                </a>

            </div>
            <form className='form' ref={form} onSubmit={formHandler}>
                <label>Name</label>
                <input type='text' name='name' ref={name} required></input>
                <label>Email</label>
                <input type='mail' email='email' ref={email} required></input>
                <label>Mesage</label>
                <input ref={message} message='message' className="input_message" type='text' required></input>
                <button type='submit' className='form-button'>Send Message</button>
            </form>
    </section>
}

export default Contact