import styles from './Slider.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Mousewheel, Pagination} from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import {slideUsers} from "../../utils/tabs-content.tsx";


const Slider = () => {
    return <div className={styles.ourUsersRel}>
        <div className={styles.usersSlider}>
            <div className="swiper-wrapper">
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    mousewheel={true}
                    modules={[Pagination, Autoplay, Mousewheel]}
                    pagination={{
                        el: `.${styles.paginationContainer}`,
                        type: 'bullets',
                        bulletClass: styles.bullet,
                        bulletActiveClass: styles.bulletActive,
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    breakpoints={{
                        992: {
                            direction: "vertical",
                            slidesPerView: 3,
                            spaceBetween: 10,
                            pagination: {
                                enabled: false
                            }
                        }
                    }}
                >
                    {slideUsers.map((slide) => {
                        return <SwiperSlide className={"swiper-slide"} key={slide.id}>
                            <div className={styles.ourUsersBox}>
                                <img width={1000} height={1000} src={slide.img} alt="users" />
                                <div className={styles.ourUsersInfo}>
                                    <div className={styles.ourUsersCnt}>
                                        <div>
                                            <strong className={styles.name}>{slide.name}</strong>
                                            <small className={styles.small}>{slide.role}</small>
                                        </div>
                                        <span className={styles.usersRevCount}>5.0</span>
                                    </div>
                                    <p>
                                        {slide.text}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>;
                    })}
                </Swiper>
            </div>
        </div>
        <div className={styles.paginationContainer}></div>
    </div>;

};

export default Slider;
