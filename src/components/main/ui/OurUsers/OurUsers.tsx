import styles from './OurUsers.module.scss';
import React from "react";
import Slider from "../../../../shared/slider/Slider.tsx";
import TryFree from "../TryFree/TryFree.tsx";

interface OurUsersProps {
    reviewsRef: React.RefObject<HTMLLIElement>;
}

const OurUsers = ({reviewsRef}: OurUsersProps) => {
    return (
        <section ref={reviewsRef} className={styles.ourUsersMain}>
            <div className={"container"}>
                <div className={styles.mainContent}>
                    <h2 className={styles.titleUser}>Что говорят наши пользователи</h2>
                    <div className={styles.ourUsersFlex}>
                        <div className={styles.ourUsersStats}>
                            <img width={386} height={260} src="/public/images/user-1.webp" alt="users" />
                            <div className={styles.ourUsersInfo}>
                                <div className={styles.ourUsersCnt}>
                                    <div className={styles.ourUsersName}>
                                        <strong>Анна К.</strong>
                                        <small>Маркетолог</small>
                                    </div>
                                    <span className="users-rev-count">5.0</span>
                                </div>
                                <p>
                                    “Slidery AI сэкономил мне часы работы! ИИ сам подбирает стильные слайды, а мне остается лишь немного
                                    доработать детали. Теперь мои презентации выглядят профессионально без лишних усилий.”
                                </p>
                            </div>
                        </div>
                        <Slider />
                    </div>
                    <TryFree />
                </div>
            </div>
        </section>
    );

};

export default OurUsers;
