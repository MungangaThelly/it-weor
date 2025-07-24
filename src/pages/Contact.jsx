import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Kontakta Oss</h2>
      <p>Du kan nå oss via följande kontaktuppgifter:</p>

      <div style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '400px', margin: '2rem auto' }}>
        <p><strong>Email:</strong> <a href="mailto:it.weor@gmail.com">it.weor@gmail.com</a></p>
        <p><strong>Telefon:</strong> +46 70 481 03 77</p>
        <p><strong>Adress:</strong> ort-Bromma, Stockholm</p>
        <p><strong>Org.nr:</strong> 559397-7332</p>
        <br />
        <p><strong>Vi Tackar, <br />Many Thanks,<br /> Merci beaucoup,</strong></p>

      </div>
    </div>
  );
};

export default Contact;
