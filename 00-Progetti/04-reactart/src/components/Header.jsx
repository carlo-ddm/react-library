import logo from '../assets/logo.png';
import classes from './Header.module.css'

export default function Header() {
  const addParagraph = true;
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* <p className={addParagraph ? classes.paragraph : ''}>A community of artists and art-lovers.</p>
      <p className={addParagraph && classes.paragraph}>A community of artists and art-lovers.</p>
      <p className={`staticClass ${addParagraph ? classes.paragraph : ''}`}>A community of artists and art-lovers.</p> */}
      <p className={`staticClass ${addParagraph && classes.paragraph}`}>A community of artists and art-lovers.</p>
    </header>
  );
}
