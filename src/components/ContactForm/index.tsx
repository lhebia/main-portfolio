import React, { useReducer } from 'react';

import "./styles.scss";

const ContactForm: React.FC<any> = () => {

  const [loginInput, setLoginInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      namePlaceholder: "Name *",
      name: "",
      emailPlaceholder: "Email *",
      email: "",
      messagePlaceholder: "Message *",
      message: "",
    }
  )

  const handleLoginInput = (event:any) => {
    const name = event.target.name
    const value = event.target.value
    setLoginInput({ [name]: value })
  }

    return (
      <div className="wrapper">
        <section className="page-section contact-section" id="Contact">
          <h4 className="section-header">Contact Me</h4>
          <p className="section-sub-header">Let's chat, feel free to drop a line to discuss a project or even to have a coffee.</p>
          <form className="portfolio-form" action="https://formspree.io/f/xwkrrapw" method="POST">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleLoginInput}
              value={loginInput.name}
              placeholder={loginInput.namePlaceholder}
            />
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleLoginInput}
              value={loginInput.email}
              placeholder={loginInput.emailPlaceholder}
            />
            <textarea
              id="message"
              name="message"
              rows="5"
              cols="33"
              onChange={handleLoginInput}
              placeholder={loginInput.messagePlaceholder}
              value={loginInput.message}
            />
            <input
              type="submit"
              value="Submit"
              className="portfolio-input"
            />
          </form>
        </section>
      </div>
    )
}

export default ContactForm;
