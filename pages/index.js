import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/HeaderDefault';
import Footer from '../components/footer/FooterDefault';
import { Inter } from 'next/font/google';
import SwiperEvaluate from '@/components/swiper/Swiper';
import TeamEducation from '@/components/team/TeamEducation';
import CategoryItems from '@/components/cate/cate';
import NavTabs from '@/components/nav/NavTabs';
import CourseItems from '@/components/course/CourseItems';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const offset = 200; // Distance from the element before the effect is triggered

            if (scrollTop > windowHeight - offset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const refreshList = () => {
            // Your refreshList logic here
        };

        refreshList();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <main className="wrapper_home">
                {/* Background */}
                <section className="home-background slider__area slider__height-2 include-bg d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-lg-6">
                                <div className="slider__content-2">
                                    <span>NextGen Education & Solutions</span>
                                    <h3 className="slider__title-2">Build an Incredible Learning Experience</h3>
                                    <p>Đào tạo chuyên môn phục vụ cho các nhu cầu công việc tại nơi bạn làm</p>
                                    <a href="/khoa-hoc" className="tp-btn-green">
                                        Về chúng tôi
                                    </a>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-lg-6">
                                <div className="slider__thumb-2">
                                    <div className="slider__shape">
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/slider-cap-1.webp"
                                            alt="NextGen"
                                            className="slider__shape-1"
                                        />
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/slider-cap-2.webp"
                                            alt="NextGen"
                                            className="slider__shape-2"
                                        />
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/slider-cap-3.webp"
                                            alt="NextGen"
                                            className="slider__shape-3"
                                        />
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/slider-shape-1.webp"
                                            alt="NextGen"
                                            className="slider__shape-4"
                                        />
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/slider-shape-2.webp"
                                            alt="NextGen"
                                            className="slider__shape-5"
                                        />
                                    </div>
                                    <span className="slider__thumb-mask">
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/slider-thumb.webp"
                                            alt="NextGen"
                                            className=""
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Research */}
                <section className={`research__area ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="research__wrapper-2">
                                    <div className="section__title-wrapper">
                                        <span className="section__title-pre">NextGen</span>
                                        <h3 className="section__title">Education & Solutions</h3>
                                    </div>
                                    <p>
                                        Learn from anywhere in the world on desktop, or mobile phone with an Internet
                                        connection.
                                    </p>
                                    <div className="research__btn-2">
                                        <a className="tp-btn-5 tp-btn-6" href="/lien-he">
                                            Get started now
                                        </a>
                                    </div>
                                    <div className="research__download">
                                        <div
                                            className="research__download-bg include-bg"
                                            style={{
                                                backgroundImage:
                                                    'url("https://api.nextgenes.edu.vn/storage/research-bg.webp")',
                                            }}
                                        ></div>

                                        <div className="research__content-2">
                                            <h3 className="research__title-2">Start Learning by Downloading Apps</h3>
                                        </div>
                                        <div className="research__thumb-2">
                                            <Image
                                                srcset="https://api.nextgenes.edu.vn/storage/research-1.webp"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6">
                                <div className="research__features-wrapper">
                                    <div className="research__features-item d-sm-flex align-items-start mb-5">
                                        <div className="research__features-icon">
                                            <span>
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/desktop-icon-1.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </span>
                                        </div>
                                        <div className="research__features-content">
                                            <h4>eduker Online Training from Experts</h4>
                                            <p>
                                                Learn from anywhere in the world on desktop mobile Phone with an
                                                Internet connection.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="research__features-item d-sm-flex align-items-start mb-5">
                                        <div className="research__features-icon">
                                            <span>
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/desktop-icon-2.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </span>
                                        </div>
                                        <div className="research__features-content">
                                            <h4>Over 2.4k Video Course (all coures)</h4>
                                            <p>
                                                LLearn from anywhere in the world on desktop mobile Phone with an
                                                Internet connection.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="research__features-item d-sm-flex align-items-start mb-5">
                                        <div className="research__features-icon">
                                            <span>
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/desktop-icon-3.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </span>
                                        </div>
                                        <div className="research__features-content">
                                            <h4>Occasional Video updates (2022)</h4>
                                            <p>
                                                Learn from anywhere in the world on desktop mobile Phone with an
                                                Internet connection.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className={`team__area pt-5 ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}
                    style={{ marginTop: '100px' }}
                >
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="section__title-wrapper">
                                    <span className="section__title-pre">Đội ngũ giáo viên giỏi tại</span>
                                    <h3 className="section__title">NEXTGEN EDUCATION & SOLUTIONS</h3>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="team__wrapper">
                                    <p>
                                        Chúng tôi có đội ngũ giáo viên:{' '}
                                        <strong>Giỏi chuyên môn - Giàu kinh nghiệm - Phương pháp dễ hiểu</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Team Card */}
                            <TeamEducation />
                        </div>
                    </div>
                </section>
                {/* Category */}
                <section className="category__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="category__wrapper">
                                    <div className="section__title-wrapper-2">
                                        <span className="section__title-pre-2">Danh mục</span>
                                        <h3 className="section__title-2 section__title-2-29">
                                            CÁC KHÓA HỌC TẠI NEXTGEN
                                        </h3>
                                    </div>
                                    <p>Look into yourself, get something in return as your achievement</p>
                                    <div className="category__btn">
                                        <a className="tp-btn-5" href="/khoa-hoc">
                                            Xem tất cả
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="category__item-wrapper">
                                    <div className="row">
                                        <CategoryItems />
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon add">
                                                    <a href="/khoa-hoc/art-design">+</a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title add">Tất cả</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Course */}
                <section className="course__area grey-bg pt-110 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section__title-wrapper text-center mb-40">
                                    <div className="section__title-pre">Khóa học</div>
                                    <div className="section__title">CÁC KHÓA HỌC PHỔ BIẾN NHẤT</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="course__filter text-center mb-30">
                                    <NavTabs />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <CourseItems />
                        </div>
                    </div>
                </section>
                {/* Evaluate */}
                <section className="evaluate__area pt-80 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section__title-wrapper mb-40 text-center">
                                    <div className="section__title-pre">Đánh Giá</div>
                                    <div className="section__title">KHÁCH HÀNG CỦA CHÚNG TÔI NÓI GÌ</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="evaluate__slider">
                                <SwiperEvaluate />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Brand */}
                <section className={`brand__area pt-110 pb-70 ${isVisible ? 'animate__zoomIn' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="brand__wrapper">
                                    <div className="section__title-wrapper-2">
                                        <span className="section__title-pre-2">Đối Tác Của</span>
                                        <h3 className="section__title-2 section__title-2-29">
                                            NEXTGEN EDUCATION & SOLUTIONS
                                        </h3>
                                    </div>
                                    <p>
                                        You can list your partners or instructors is brands here to show off your site
                                        is reputation
                                    </p>
                                    <div className="category__btn">
                                        <a className="tp-btn-5" href="/khoa-hoc">
                                            Xem tất cả
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="brand__item-wrapper pl-100">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-1.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-1.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-2.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-2.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-1.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-5.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="brand__item">
                                                <Image
                                                    srcset="https://api.nextgenes.edu.vn/storage/brand-5.webp"
                                                    alt="NextGen"
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    );
}
