import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tures Costa Rica</title>
      </Head>

      <Navbar />
      <header>
        <h1>Tures Costa Rica</h1>
        <p>Explora lo mejor de Costa Rica con nosotros</p>
      </header>

      <main>
        <section>
          <h2>Servicios turísticos</h2>
          <div className="services">
            <div className="service">
              <img src="/images/playa.jpg" alt="Playas" />
              <h3>Playas paradisíacas</h3>
              <p>Disfruta de las mejores playas del Caribe y Pacífico.</p>
            </div>
            <div className="service">
              <img src="/images/volcan.jpg" alt="Volcanes" />
              <h3>Volcanes y termales</h3>
              <p>Visita volcanes activos y relájate en aguas termales.</p>
            </div>
            <div className="service">
              <img src="/images/aves.jpg" alt="Aves" />
              <h3>Avistamiento de aves</h3>
              <p>Explora la biodiversidad con guías expertos.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Galería</h2>
          <div className="gallery">
            <img src="/images/playa.jpg" alt="Playa" />
            <img src="/images/volcan.jpg" alt="Volcán" />
            <img src="/images/aves.jpg" alt="Aves" />
            <img src="/images/cultura.jpg" alt="Cultura" />
          </div>
        </section>

        <section className="testimonials">
          <h2>Testimonios</h2>
          <div className="testimonial">
            <p>"Una experiencia inolvidable, Costa Rica es mágica."</p>
            <strong>- Andrea M.</strong>
          </div>
          <div className="testimonial">
            <p>"El tour fue excelente, organización de primera."</p>
            <strong>- Carlos R.</strong>
          </div>
        </section>

        <section className="contact">
          <h2>Contáctanos</h2>
          <p>Correo: info@turescr.com</p>
          <p>Teléfono: +506 8888-8888</p>
        </section>

        <section className="whatsapp">
          <h2>¿Necesitas ayuda?</h2>
          <a href="https://wa.me/50688888888" className="whatsapp-button" target="_blank">Escríbenos por WhatsApp</a>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Tures Costa Rica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}