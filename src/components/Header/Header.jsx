import styles from './Header.module.css';
import logo from '../../assets/images/github_logo.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Github Logo" className={styles.gitLogo} />
            </div>
        </header>
    );
}

export default Header;