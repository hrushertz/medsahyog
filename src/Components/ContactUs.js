import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"; // Import the CSS file

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yqhy8re",
        "template_wbfchoq",
        form.current,
        "S-5wGjOM3z4YCPJCK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<> 
<div className="container1 projects">
  <h1>Contact Us</h1>
  <div className="overlay" />
</div>


    <div className="container">

    
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="enquiry-heading">
          <h2>Enquiry</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="to_name" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      
    </div>
    <div className="hospital-img">
    <img src="hospital_contactimg.jpg" alt="Hospital Image"/>
    </div>

    </div>
</>

  );
};

export default ContactUs;
