import React from 'react';
import styles from './ImpressMain.module.scss';
import { Link } from "react-router-dom";

const impressBox = [
    {
        title: "Начните с идеи",
        text: "Добавьте текст, изображения или видео – нейросеть превратит их в стильные слайды",
        img: "/public/images/card.webp",
        buttonText: ""
    },
    {
        title: "Smart design",
        text: "Умные алгоритмы автоматически подбирают стиль, компоновку и цвета, чтобы всё выглядело профессионально",
        img: "/public/images/card-2.webp",
        buttonText: ""
    },
    {
        title: "Переходы и анимации",
        text: "Движение привлекает внимание – добавьте плавные анимации, сделав презентацию динамичнее",
        img: "/public/images/card-3.webp",
        buttonText: ""
    },
    {
        title: "Создавайте бесплатно!",
        text: "Попробуйте прямо сейчас! Загрузите текст, и сервис подготовит для вас первую презентацию",
        img: "/public/images/card-4.webp",
        buttonText: "Начать бесплатно"
    }
];

interface ImpressMainProps {
    formatsRef: React.RefObject<HTMLLIElement>;
}

const ImpressMain = ({formatsRef}: ImpressMainProps) => {
    return (
        <section ref={formatsRef} className={styles.impressMain}>
            <div className={"container"}>
                <div className={styles.impressHeader}>
                    <h2>Больше, чем просто ИИ</h2>
                    <p>Черпайте вдохновение и впечатляйте аудиторию!</p>
                </div>
                <div className={styles.impressCnt}>
                    {impressBox.map((impress) =>
                        <div key={impress.title} className={styles.impressBox}>
                            <div className={styles.impressInfo}>
                                <h3>{impress.title}</h3>
                                <p>{impress.text}</p>

                                <Link to={"https://slidery.ai/sign-up"}>
                                    <button>{impress.buttonText}</button>
                                </Link>
                            </div>
                            <div className={styles.impressPicture}>
                                <img width={575} height={350} src={impress.img} alt="card" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );

};

export default ImpressMain;
