import Head from 'next/head';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function Reserva() {
  return (
    <div>
      <Head>
        <title>Reserva tu tour</title>
      </Head>
      <Navbar />
      <header>
        <h1>Reservar un Tour</h1>
        <p>Completa el formulario y nos pondremos en contacto contigo</p>
      </header>
      <main className="contact">
        <form>
          <div>
            <label>Nombre:</label><br />
            <input type="text" name="nombre" required />
          </div>
          <div>
            <label>Correo:</label><br />
            <input type="email" name="correo" required />
          </div>
          <div>
            <label>Fecha del tour:</label><br />
            <input type="date" name="fecha" required />
          </div>
          <div>
            <label>Tipo de tour:</label><br />
            <select name="tipo">
              <option value="aventura">Aventura</option>
              <option value="cultural">Cultural</option>
              <option value="playas">Playas</option>
              <option value="volcan">Volcanes</option>
            </select>
          </div>
          <div>
            <label>Mensaje:</label><br />
            <textarea name="mensaje" rows="4" />
          </div>
          <br />
          <button type="submit">Enviar reserva</button>
        </form>
      </main>
    </div>
  );
}