import React from "react";

function Contact() {

  const handleSubmitForm = (formData)=>{
    const formInput = Object.fromEntries(formData.entries()); //formData.entries() it's return iteratore so we convert into object key-value pair
    console.log(formInput);
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleSubmitForm}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            className="form-control"
          />
          <textarea
            required
            autoComplete="off"
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
