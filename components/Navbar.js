
import Link from 'next/link';
import '../styles/globals.css';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#047857',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <Link href="/" style={{ color: 'white', marginRight: '1.5rem', textDecoration: 'none' }}>Inicio</Link>
      <Link href="/reserva" style={{ color: 'white', marginRight: '1.5rem', textDecoration: 'none' }}>Reservas</Link>
      <Link href="/mapa" style={{ color: 'white', textDecoration: 'none' }}>Mapa</Link>
    </nav>
  );
}
