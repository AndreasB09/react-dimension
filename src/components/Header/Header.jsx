import styles from './Header.module.css';
import logo from '../../assets/images/github_logo.svg';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Github Logo" className={styles.gitLogo} />
            </div>
            <div className={styles.main}>
                <h1>Dimension</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a></p>
                <p>For free under the <a href="https://html5up.net/license">Creative Commons</a> license</p>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;