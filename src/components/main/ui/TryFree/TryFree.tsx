import styles from './TryFree.module.scss';
import { Link } from "react-router-dom";
const TryFree = () => {
    return (
        <div className={styles.tryItFree}>
            <img width={207} height={207} src="/images/free-comp.svg" alt="comp" />
            <div className={styles.tryItFreeTitle}>
                <h2>Попробуйте бесплатно!</h2>
                <p>Загрузите свой текст, и Slidery AI создаст первую презентацию</p>
            </div>
            <Link to="https://slidery.ai/sign-up" className={styles.btnBlack}>Создать презентацию</Link>
        </div>
    );
};

export default TryFree;
