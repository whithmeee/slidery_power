import styles from './ShareBrowsers.module.scss';


const shareItem = [
    {
        name: "google",
        img: "/images/google.svg"
    },
    {
        name: "firefox",
        img: "/images/firefox.svg"
    },
    {
        name: "opera",
        img: "/images/opera.svg"
    },
    {
        name: "safari",
        img: "/images/safari.svg"
    },
    {
        name: "microsoft",
        img: "/images/microsoft.svg"
    },
    {
        name: "keynote",
        img: "/images/keynote.svg"
    },
    {
        name: "apache",
        img: "/images/apache.svg"
    },
    {
        name: "vk",
        img: "/images/vk.svg"
    },
    {
        name: "whatsApp",
        img: "/images/whatsApp.svg"
    },
    {
        name: "yandex",
        img: "/images/yandex.svg"
    },
    {
        name: "telegram",
        img: "/images/telegram.svg"
    },
    {
        name: "svgrepo",
        img: "/images/svgrepo-com.svg"
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
