import React from "react";
import "./contact.css";

const ContactMe = () => {
  return (
    <>
      <div class="section-contact">
        <div class="container">
          <h2 class="section-common-heading">Contact Me</h2>
        </div>
        <div class="container grid grid-two-cols">
          <div class="contact-content">
            <form action="#">
              <div class="grid grid-two-cols mb-3">
                <div>
                  <label for="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autocomplete="off"
                    placeholder="Enter Full Name"
                    class="info-name name"
                  />
                </div>
                <div>
                  <label for="Email">Email</label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    required
                    autocomplete="off"
                    placeholder="ABC@gmail.com"
                    class="info-name Email"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="subject">subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  autocomplete="off"
                  placeholder="Title of your message"
                  class="info-name"
                />
              </div>
              <div class="mb-3">
                <label for="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  class="info-name"
                ></textarea>
              </div>

              <div>
                <button type="submit" class="btn btn-submit">
                  send message
                </button>
              </div>
            </form>
          </div>
          <div class="section-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310658522!2d79.87933474107955!3d13.047985943115949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1705231102025!5m2!1sen!2sin"
              width={500}
              height={400}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
