import React from 'react';

const Contact = () => {
  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Kontakta Oss</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thank-you"  // Redirect to the thank-you page after submission
        style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}
      >
        {/* Netlify form hidden inputs */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label>
          Namn:<br />
          <input
            type="text"
            name="name"
            placeholder="Ditt namn"
            style={inputStyle}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            placeholder="Din e-post"
            style={inputStyle}
            required
          />
        </label>
        <br /><br />
        <label>
          Meddelande:<br />
          <textarea
            name="message"
            rows="4"
            placeholder="Skriv ditt meddelande här..."
            style={{ ...inputStyle, resize: 'vertical' }}
            required
          />
        </label>
        <br /><br />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Skicka
        </button>
      </form>
    </div>
  );
};

export default Contact;
