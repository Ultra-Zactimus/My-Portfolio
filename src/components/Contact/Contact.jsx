import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sz7tth3",
        "template_4xdnyio",
        form.current,
        "9ZGjDBZHoQrIA2rgi"
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
    <section id="contact" className="contact">
      <h1 className="small">Get In Touch</h1>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option--icon" />
            <h3 className="medium">Email</h3>
            <h4 className="small">ultrazacky@gmail.com</h4>
            <a
              aria-label="Email Address"
              href="mailto:ultrazacky@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlinePhone className="contact__option--icon" />
            <h3 className="medium">Phone</h3>
            <h4 className="small">707.832.3472</h4>
            <a
              aria-label="Telephone"
              href="tel:7078323472" 
              target="_blank" 
              rel="noreferrer">
              Call Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;