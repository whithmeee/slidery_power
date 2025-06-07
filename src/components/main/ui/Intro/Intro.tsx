import styles from './Intro.module.scss';
import {Link} from "react-router-dom";

const Intro = () => {
    return (
        <section className={styles.generatingMain}>
            <div className={styles.generatingRel}>
                <div className={styles.generatingTitle}>
                    <h1>Power Point <span>онлайн</span></h1>
                    <p>С возможностью генерации через нейросеть slidery.ai</p>
                </div>
                <form>
                    <div className={styles.generatingFrom}>
                        <div className={styles.generatingInput}>
                            <label>
                                <input type="text" placeholder="Укажите тему презентации" />
                            </label>
                        </div>
                        <Link to="https://slidery.ai/sign-up" className={styles.btn}>Создать бесплатно</Link>
                    </div>
                </form>
            </div>
            <div className={styles.generatingPhoto}>
                <img width={500} height={500} sizes="100vw" src="/public/images/hero-generating.png"
                       className={styles.generatingDesc}
                       alt="generating" />
                <img width={500}
                       height={500} sizes="100vw" src="/public/images/generating-mob.webp"
                       className={styles.generatingMobile} alt="generating" />
            </div>
            <div className={styles.generatingCnt}>
                <div className={styles.generatingPicture}>
                    <img width={32}
                           height={32} src="/public/images/face-1.png" alt="users" />
                    <img width={32}
                           height={32} src="/public/images/face-2.png" alt="users" />
                    <img width={32}
                           height={32} src="/public/images/face-3.png" alt="users" />
                    <img width={32}
                           height={32} src="/public/images/face-4.png" alt="users" />
                </div>
                <p>Нам доверяют тысячи пользователей - присоединяйтесь!</p>
            </div>
        </section>
    );

};

export default Intro;
