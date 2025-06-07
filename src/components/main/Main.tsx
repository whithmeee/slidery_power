import styles from './Main.module.scss';
import { useScroll } from "../../context/ScrollContent.tsx";
import Intro from "./ui/Intro/Intro.tsx";
import SimpleWork from "./ui/SimpleWork/SimpleWork.tsx";
import PresentationsMain from "./ui/PresentationsMain/PresentationsMain.tsx";
import ImpressMain from "./ui/ImpressMain/ImpressMain.tsx";
import ShareBrowsers from "./ui/ShareBrowsers/ShareBrowsers.tsx";
import OurUsers from "./ui/OurUsers/OurUsers.tsx";
import Accordion from "../../shared/accordion/Accordion.tsx";
import Editor from "./ui/Editor/Editor.tsx";

const Main = () => {
    const { howWorkRef, possibilitiesRef, formatsRef, reviewsRef, faqRef } = useScroll();
    return (
        <div className={styles.main}>
            <Intro/>
            <Editor/>
            <SimpleWork howWorkRef={howWorkRef}/>
            <PresentationsMain possibilitiesRef={possibilitiesRef}/>
            <ImpressMain formatsRef={formatsRef}/>
            <ShareBrowsers/>
            <OurUsers reviewsRef={reviewsRef}/>
            <Accordion faqRef={faqRef}/>
        </div>
    );
};

export default Main;
