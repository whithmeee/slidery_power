import styles from './SimpleWork.module.scss';
import React from "react";
import { Link } from 'react-router-dom';

interface SimpleWorkProps {
    howWorkRef: React.RefObject<HTMLLIElement>,
    ref?: React.RefObject<HTMLLIElement>

}

const workBox = [
    {
        title: "Ввод данных",
        text: "Укажите тему вашей презентации, загрузите текст или основные тезисы",
        img: "/images/iustration-1.webp"
    },
    {
        title: "Магия ИИ",
        text: "Наблюдайте, как Slidery AI создает стильные и понятные слайды",
        img: "/images/iustration-2.webp"
    },
    {
        title: "Готовая презентация",
        text: "Скачайте презентацию в формате: PowerPoint",
        img: "/images/iustration-3.svg"
    }
];


const SimpleWork = ({howWorkRef}:SimpleWorkProps) => {
    return (
        <section ref={howWorkRef} className={styles.simpleWorkflow}>
            <div className="container">
                <div>
                    <h2 className={styles.workTitle}>Простой рабочий процесс</h2>
                    <p className={styles.workText}>Максимальная автоматизация и минимум усилий</p>
                </div>
                <div className={styles.workflowCnt}>
                    {workBox.map((work) =>
                        <div key={work.title} className={styles.workflowBox}>
                            <div className={styles.workflowPhoto}>
                                <img width={350} height={197} src={work.img} alt="iustration" />
                            </div>
                            <div className={styles.workflowTitle}>
                                <h3>{work.title}</h3>
                                <p>{work.text}</p>
                            </div>
                        </div>
                    )}
                    <div className={styles.unlockSettings}>
                        <div className={styles.unlockSettingsPhoto}>
                            <img width={1190} height={390} src="/images/animation.png" alt="animation" />
                        </div>
                        <div className={styles.unlockSettingsMod}>
                            <img width={64} height={64} src="/images/lock.gif" alt="lock" />
                            <h3>Разблокируйте новые настройки</h3>
                            <p>
                                Выбирайте тему оформления, цвета, шрифты и стиль дизайна
                            </p>
                            <Link to="https://slidery.ai/sign-up" className={styles.btn}>Попробовать бесплатно</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default SimpleWork;
