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
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option--icon" />
            <h4>Email</h4>
            <h5>ultrazacky@gmail.com</h5>
            <a
              href="mailto:ultrazacky@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option--icon" />
            <h4>Messenger</h4>
            <h5>Zach Green</h5>
            <a href="https://m.me/zach.green" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option--icon" />
            <h4>Phone</h4>
            <h5>707.832.3472</h5>
            <a href="tel:7078323472" target="_blank" rel="noreferrer">
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