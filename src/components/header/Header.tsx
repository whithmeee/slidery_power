import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import {useScroll} from "../../context/ScrollContent.tsx";




const Header = () => {
    const { scrollToSection, howWorkRef, possibilitiesRef, formatsRef, reviewsRef, faqRef } = useScroll();

    const menuItems = [
        { label: "Как работает", ref: howWorkRef },
        { label: "Возможности", ref: possibilitiesRef },
        { label: "Форматы", ref: formatsRef },
        { label: "Отзывы", ref: reviewsRef },
        { label: "FAQ", ref: faqRef }
    ];


   return <header className={styles.header}>
        <div className={styles.menu}>
            <div className={styles.logo}>
                <Link to="/">
                    <img width={124} height={40} loading="eager" src="/images/Logo.svg" alt="Logo" />
                    <p className={styles.header_number}><span>🇷🇺 </span>№ 1 в России </p>
                </Link>
            </div>
            <ul className={styles.menuScroll}>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={styles.itemHeader}
                        onClick={() => scrollToSection(item.ref)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className={styles.headerBtn}>
                <Link to="https://slidery.ai/sign-up" className={styles.btnBlack}>Войти</Link>
                <Link to="https://slidery.ai/sign-up" className={styles.btn}>Попробовать бесплатно</Link>
            </div>
        </div>
    </header>

};

export default Header;
