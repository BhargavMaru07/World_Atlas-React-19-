import React from "react";

function Contact() {
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action="">
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
            className="form-control"
          />
          <textarea
            required
            autoComplete="false"
            rows={7}
            placeholder="Enter your message"
            name="message"
            className="form-control"
          />
      <button type="submit" className="">
        Send
      </button>
        </form>
      </div>

    </section>
  );
}

export default Contact;
