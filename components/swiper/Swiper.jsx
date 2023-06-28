import Image from 'next/image';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const SwiperEvaluate = () => {
    useEffect(() => {
        // Khởi tạo Swiper
        const swiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // Hướng trượt
            loop: true, // Vòng lặp trượt
            slidesPerView: 3, // Số slide hiển thị trên mỗi view
            spaceBetween: 10, // Khoảng cách giữa các slide
            autoplay: {
                delay: 3000, // Thời gian trễ giữa các slide (ms)
                disableOnInteraction: false, // Tắt autoplay khi người dùng tương tác
            },
            navigation: {
                nextEl: '.swiper-button-next', // Selector của nút next
                prevEl: '.swiper-button-prev', // Selector của nút prev
            },
        });

        // Làm sạch và hủy bỏ Swiper khi component bị unmount
        return () => {
            // swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper d-flex">
                <div className="swiper-container">
                    <div className="swiper-wrapper d-flex">
                        <div className="evaluate__item transition-3 text-center white-bg">
                            <div className="evaluate__avatar">
                                <Image
                                    srcset="https://api.nextgenes.edu.vn/storage/testimonial-4.webp"
                                    alt="NextGen"
                                    className=""
                                />
                            </div>
                            <div className="evaluate__text">
                                <h4>Good Product</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae
                                    neque ornare.
                                </p>
                            </div>
                            <div className="evaluate__info">
                                <h3>Shahnewaz Sakil</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <div className="evaluate__item transition-3 text-center white-bg">
                            <div className="evaluate__avatar">
                                <Image
                                    srcset="https://api.nextgenes.edu.vn/storage/testimonial-4.webp"
                                    alt="NextGen"
                                    className=""
                                />
                            </div>
                            <div className="evaluate__text">
                                <h4>Good Product</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae
                                    neque ornare.
                                </p>
                            </div>
                            <div className="evaluate__info">
                                <h3>Shahnewaz Sakil</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <div className="evaluate__item transition-3 text-center white-bg">
                            <div className="evaluate__avatar">
                                <Image
                                    srcset="https://api.nextgenes.edu.vn/storage/testimonial-3.webp"
                                    alt="NextGen"
                                    className=""
                                />
                            </div>
                            <div className="evaluate__text">
                                <h4>Good Product</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus feugiat lacus vitae
                                    neque ornare.
                                </p>
                            </div>
                            <div className="evaluate__info mb-5">
                                <h3>Shahnewaz Sakil</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination d-flex align-items-center">
                <div className="swiper-button-next swiper-button-white"></div>
                <div className="swiper-button-prev swiper-button-white"></div>
            </div>
        </div>
    );
};

export default SwiperEvaluate;
