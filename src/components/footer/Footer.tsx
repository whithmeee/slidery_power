import styles from  './Footer.module.scss';
import { Link } from "react-router-dom";
import { useScroll } from "../../context/ScrollContent.tsx";


const Footer = () => {
    const { scrollToSection, howWorkRef, possibilitiesRef, formatsRef, reviewsRef, faqRef } = useScroll();
    const menuItems = [
        { label: "Как работает", ref: howWorkRef },
        { label: "Возможности", ref: possibilitiesRef },
        { label: "Форматы", ref: formatsRef },
        { label: "Отзывы", ref: reviewsRef },
        { label: "FAQ", ref: faqRef }
    ];

    return (
        <div className={styles.footerMain}>
            <div>
                <div className={styles.footerLogo}>
                    <img src="../../../public/images/logo-slidery.png" alt="slidery" />
                </div>
                <div className={styles.footerCnt}>
                    <div className={styles.footerRel}>
                        <Link to="https://slidery.ai/sign-up" className={styles.btn}>Попробовать бесплатно</Link>
                        <div className={styles.footerMenu}>
                            <ul className={styles.menuScroll}>
                                {menuItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className={styles.footerText}
                                        onClick={() => scrollToSection(item.ref)}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer-politic G-flex-column G-align-center">
                            <div className={styles.politicOffer}>
                                <Link to="https://slidery.ai/offer-agreement">Договор оферта</Link>
                                <Link to="https://slidery.ai/privacy-policy">Политика конфиденциальности</Link>
                            </div>
                            <p className={styles.contacts}>
                                По всем вопросам, связанным с работой сервиса, вы можете связаться с нами по электронной почте
                                <a className={styles.email} href="mailto:help@slidery.ai">help@slidery.ai</a>
                            </p>
                            <p className={styles.rights}>© 2025 Slidery AI. Все права защищены</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Footer;
