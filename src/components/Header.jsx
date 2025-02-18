import logoImg from '../assets/logo1.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>Contact Form</h1>
    </header>
  );
}
