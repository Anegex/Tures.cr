import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function Mapa() {
  return (
    <div>
      <Head>
        <title>Ubicación</title>
      </Head>
      <Navbar />
      <header>
        <h1>Nuestra ubicación</h1>
        <p>Estamos ubicados en San José, Costa Rica</p>
      </header>
      <main className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0230211657276!2d-84.09072468573344!3d9.928069892902727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb5d376308f9%3A0x3de034f8a8d25484!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2scr!4v1714000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </div>
  );
}