import styles from "./Header.module.css";
import logo from './assets/logo.jpg';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <img src={logo} className="logo-img" alt="logo" />
                <a href="/login">Logg inn</a>
                <a href="/play">Spill</a>
                <a href="/rules">Regler</a>
            </nav>
        </header>
    )
}