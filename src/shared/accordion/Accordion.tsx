import React, {useRef, useState} from 'react';
import styles from './Accordion.module.scss';
import { faqItems } from "../../utils/tabs-content.tsx";

interface AccordionProps {
    faqRef?: React.RefObject<HTMLDivElement>;
    title?: string;
    className?: string;
}


const Accordion = ({faqRef}:AccordionProps) => {
    const [accordionContent, setAccordionContent] = useState<number | null>(null);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleTab = (index: number) => {
        setAccordionContent(accordionContent === index ? null : index);
    };


    return (
        <section ref={faqRef} className={styles.accordion_content}>
            <div className="container">
                <h2 className={styles.title}>Все, что нужно знать о Slidery AI</h2>
                <div className={(styles.accordion)}>
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.accordionBox} ${accordionContent === index ? styles.open : ""}`}
                        >
                            <div
                                className={styles.accordionClick}
                                onClick={() => toggleTab(index)}
                            >
                                <strong>{item.question}</strong>
                                <div className={styles.accordionArrow}>
                                </div>
                            </div>
                            <div
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                                style={{
                                    height: accordionContent === index
                                        ? `${(contentRefs.current[index]?.scrollHeight || 0) + 10}px`
                                        : "0px"
                                }}
                                className={`${styles.submenu} ${accordionContent === index ? "open" : ""}`}
                            >
                                <div className={styles.submenuContent}>
                                    {item.answer}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accordion;
