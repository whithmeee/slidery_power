import styles from './ShareBrowsers.module.scss';


const shareItem = [
    {
        name: "google",
        img: "/public/images/google.svg"
    },
    {
        name: "firefox",
        img: "/public/images/firefox.svg"
    },
    {
        name: "opera",
        img: "/public/images/opera.svg"
    },
    {
        name: "safari",
        img: "/public/images/safari.svg"
    },
    {
        name: "microsoft",
        img: "/public/images/microsoft.svg"
    },
    {
        name: "keynote",
        img: "/public/images/keynote.svg"
    },
    {
        name: "apache",
        img: "/public/images/apache.svg"
    },
    {
        name: "vk",
        img: "/public/images/vk.svg"
    },
    {
        name: "whatsApp",
        img: "/public/images/whatsApp.svg"
    },
    {
        name: "yandex",
        img: "/public/images/yandex.svg"
    },
    {
        name: "telegram",
        img: "/public/images/telegram.svg"
    },
    {
        name: "svgrepo",
        img: "/public/images/svgrepo-com.svg"
    }
];


const ShareBrowsers = () => {
    return (
        <section className={styles.shareBrowsersMain}>
            <div className={"container"}>
                <div className={styles.shareBrowsersTitle}>
                    <h2>Делитесь презентациями</h2>
                    <p>Быстрая отправка файла в мессенджеры, браузеры и почты</p>
                </div>

                <div className={styles.shareBrowsersContent}>
                    {shareItem.map((share) =>
                        <div key={share.name} className={styles.shareBrowsersItem}>
                            <img width={48} height={48} src={share.img} alt={share.name} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShareBrowsers;
