const Contact = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Kontakta Oss</h2>
    <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
      <label>
        Namn:<br />
        <input type="text" name="name" style={{ width: '100%', padding: '0.5rem' }} />
      </label>
      <br /><br />
      <label>
        Email:<br />
        <input type="email" name="email" style={{ width: '100%', padding: '0.5rem' }} />
      </label>
      <br /><br />
      <label>
        Meddelande:<br />
        <textarea name="message" rows="4" style={{ width: '100%', padding: '0.5rem' }} />
      </label>
      <br /><br />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Skicka</button>
    </form>
  </div>
);

export default Contact;
