import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/HeaderDefault';
import Footer from '../components/footer/FooterDefault';
import { Inter } from 'next/font/google';
import SwiperEvaluate from '@/components/swiper/Swiper';
import TeamEducation from '@/components/team/TeamEducation';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
                <section className="research__area">
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
                <section className="team__area pt-5" style={{ marginTop: '100px' }}>
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
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                                            <div className="category__item text-center mb-45">
                                                <div className="category__icon">
                                                    <a href="/khoa-hoc/art-design">
                                                        <Image
                                                            srcset="https://api.nextgenes.edu.vn/storage/art-design-icon.webp"
                                                            alt="NextGen"
                                                            className=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="category__content">
                                                    <h4 className="category__title">
                                                        <a href="/khoa-hoc/art-design" className="category__title">
                                                            Art & Design
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
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
                                    <nav>
                                        <div class="nav nav-tabs justify-content-center" id="course-tab" role="tablist">
                                            <button
                                                class="nav-link active"
                                                id="nav-all-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-all"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-all"
                                                aria-selected="true"
                                            >
                                                Tất cả
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="nav-trending-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-trending"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-trending"
                                                aria-selected="false"
                                                tabindex="-1"
                                            >
                                                Trending
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="nav-popularity-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-popularity"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-popularity"
                                                aria-selected="false"
                                                tabindex="-1"
                                            >
                                                Popularity
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="nav-featured-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-featured"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-featured"
                                                aria-selected="false"
                                                tabindex="-1"
                                            >
                                                Featured
                                            </button>
                                            <button
                                                class="nav-link"
                                                id="nav-design-architect-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-design-architect"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-design-architect"
                                                aria-selected="false"
                                                tabindex="-1"
                                            >
                                                Design Architect
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="course__item transition-3 white-bg">
                                    <div className="course__thumb course_thumb_height fix">
                                        <a href="https://nextgenes.edu.vn/khoa-hoc/university-seminar-series-global-2-19.html">
                                            <Image
                                                srcset="https://api.nextgenes.edu.vn/storage/course-2.webp"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </a>
                                    </div>
                                    <div className="course__content">
                                        <div className="course__top">
                                            <div className="course__tag">
                                                <a href="/khoa-hoc/marketing">Marketing</a>
                                            </div>
                                        </div>
                                        <h3 className="course__title mk-truncate-1">
                                            <a href="/khoa-hoc/university-seminar-series-global-2-19.html">
                                                University seminar series global 2.
                                            </a>
                                        </h3>
                                        <div className="bottom d-flex align-items-center justify-content-between">
                                            <div className="course__action">
                                                <ul>
                                                    <li>
                                                        <div className="course__action-item">
                                                            <div className="course__action-icon mr-5">
                                                                <span>
                                                                    <i class="fa-regular fa-user"></i>
                                                                </span>
                                                            </div>
                                                            <div className="course__action-content">
                                                                <span>Brian Cumin</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="course__action-item">
                                                            <div className="course__action-icon mr-5">
                                                                <span>
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </span>
                                                            </div>
                                                            <div className="course__action-content">
                                                                <span>0 học sinh</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="course__tutor">Tiếng Anh</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="course__item transition-3 white-bg">
                                    <div className="course__thumb course_thumb_height fix">
                                        <a href="https://nextgenes.edu.vn/khoa-hoc/university-seminar-series-global-2-19.html">
                                            <Image
                                                srcset="https://api.nextgenes.edu.vn/storage/course-2.webp"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </a>
                                    </div>
                                    <div className="course__content">
                                        <div className="course__top">
                                            <div className="course__tag">
                                                <a href="/khoa-hoc/marketing">Marketing</a>
                                            </div>
                                        </div>
                                        <h3 className="course__title mk-truncate-1">
                                            <a href="/khoa-hoc/university-seminar-series-global-2-19.html">
                                                University seminar series global 2.
                                            </a>
                                        </h3>
                                        <div className="bottom d-flex align-items-center justify-content-between">
                                            <div className="course__action">
                                                <ul>
                                                    <li>
                                                        <div className="course__action-item">
                                                            <div className="course__action-icon mr-5">
                                                                <span>
                                                                    <i class="fa-regular fa-user"></i>
                                                                </span>
                                                            </div>
                                                            <div className="course__action-content">
                                                                <span>Brian Cumin</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="course__action-item">
                                                            <div className="course__action-icon mr-5">
                                                                <span>
                                                                    <i class="fa-regular fa-eye"></i>
                                                                </span>
                                                            </div>
                                                            <div className="course__action-content">
                                                                <span>0 học sinh</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="course__tutor">Tiếng Anh</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                <section className="brand__area pt-110 pb-70">
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
