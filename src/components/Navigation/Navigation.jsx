import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#Intro">Intro</a></li>
                <li><a href="#Work">Work</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;