import funLogo from '../../assets/images/fun-logo.png';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={funLogo} alt="Logotipo do fun interaction" />
    </header>
  );
}
