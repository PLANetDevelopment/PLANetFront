import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

function Layout({activeMenu}) {
    return (
        <div className={styles.container}>
            <div className={styles.layout}>
                <Footer activeMenu={activeMenu}></Footer>
            </div>
        </div>
    );
}

export default Layout;