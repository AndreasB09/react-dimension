import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.disclaimer}>
                Unttitled. Design: <a href="https://html5up.net">HTML5 UP</a>. Images: <a href="https://unsplash.com">Unsplash</a> 
            </p>
        </footer>
    )
}

export default Footer;