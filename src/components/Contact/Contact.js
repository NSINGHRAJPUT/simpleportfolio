import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  let form = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ehfw2ma",
        "template_2669vj9",
        form.current,
        "VmaP3bAcIOVJgG3s9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_details" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <a href="mailto:nsinghrajputx@gmail.com" className="nav_link">
          <i className="uil uil-envelope"></i>
          <span className="nav_item">Email</span>
          <h4>nsinghrajputx@gmail.com</h4>
        </a>
        <a href="mailto:nsinghrajputx@gmail.com" className="nav_link">
          <i className="uil uil-message"></i>
          <span className="nav_item">Messanger</span>
          <h4>NEERAJ SINGH RAJPUT</h4>
        </a>
        <a href="https://wa.me/9752661779" className="nav_link">
          <i className="uil uil-whatsapp"></i>
          <span className="nav_item">Whatsapp</span>
          <h4>+91 9752661779</h4>
        </a>
      </div>
      <form className="form" ref={form} onSubmit={formHandler} data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <label>Name</label>
        <input type="text" name="user_name" required></input>
        <label>Email</label>
        <input type="email" name="user_email" required></input>
        <label>Message</label>
        <textarea name="message" className="input_message" required></textarea>
        <input
          type="submit"
          className="form-button"
          value="Send Message"
        ></input>
      </form>
    </section>
  );
};

export default Contact;
