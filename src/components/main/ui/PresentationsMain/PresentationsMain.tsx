import React from 'react';
import styles from './PresentationsMain.module.scss';

interface PresentationsMainProps {
    possibilitiesRef: React.RefObject<HTMLLIElement>;
}


const PresentationsMain = ({possibilitiesRef}: PresentationsMainProps) => {
    return (
        <section ref={possibilitiesRef}>
            <div className={"container"}>
                <div className={styles.presentationsContent}>
                    <h2>Для любых презентаций и целей</h2>
                    <p>Наша нейросеть одинаково эффективна для учебных проектов, бизнес-задач и творческих идей</p>
                </div>

                <div className={styles.presentationsCnt}>
                    <img src="/images/presentations.png" className={styles.presentationsDesc}
                         alt="presentations" />
                </div>

                <div className={styles.presentationsText}>
                    <p>
                        От школьников и студентов до предпринимателей и топ-менеджеров — Slidery AI помогает создавать
                        профессиональные презентации всем, кто ценит свое время и хочет впечатлять аудиторию
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PresentationsMain;
