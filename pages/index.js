import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/HeaderDefault';
import Footer from '../components/footer/FooterDefault';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Header />
            <main className="wrapper_home">
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
                <section className="research__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="research__wrapper-2">
                                    <div className="section__title-wrapper-2">
                                        <span className="section__title-pre-2">NextGen</span>
                                        <h3 className="section__title-2">Education & Solutions</h3>
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
                                <div className="section__title-wrapper-2">
                                    <span className="section__title-pre-2">Đội ngũ giáo viên giỏi tại</span>
                                    <h3 className="section__title-2">NEXTGEN EDUCATION & SOLUTIONS</h3>
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
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="team__item text-center">
                                    <div className="team__thumb">
                                        <div className="team__shape">
                                            <Image
                                                srcset="https://nextgenes.edu.vn/img/team/team-shape-1.png"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </div>
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/team-sm-1.webp"
                                            alt="NextGen"
                                            className=""
                                        />
                                    </div>
                                    <div className="team__content">
                                        <h3 className="team__title">
                                            <a href="https://nextgenes.edu.vn/doi-ngu/melissa-jones-9.html">
                                                Melissa Jones
                                            </a>
                                        </h3>
                                        <span className="team__designation">Professor</span>
                                        <p className="mk-truncate-3">
                                            Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey
                                            guvnor in my flat, up the duff Eaton car
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="team__item text-center">
                                    <div className="team__thumb">
                                        <div className="team__shape">
                                            <Image
                                                srcset="https://nextgenes.edu.vn/img/team/team-shape-2.png"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </div>
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/team-sm-2.webp"
                                            alt="NextGen"
                                            className=""
                                        />
                                    </div>
                                    <div className="team__content">
                                        <h3 className="team__title">
                                            <a href="https://nextgenes.edu.vn/doi-ngu/melissa-jones-9.html">
                                                Morgan Key
                                            </a>
                                        </h3>
                                        <span>Teacher MBA</span>
                                        <p className="mk-truncate-3">
                                            Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey
                                            guvnor in my flat, up the duff Eaton car
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="team__item text-center">
                                    <div className="team__thumb">
                                        <div className="team__shape">
                                            <Image
                                                srcset="https://nextgenes.edu.vn/img/team/team-shape-1.png"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </div>
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/team-sm-1.webp"
                                            alt="NextGen"
                                            className=""
                                        />
                                    </div>
                                    <div className="team__content">
                                        <h3 className="team__title">
                                            <a href="https://nextgenes.edu.vn/doi-ngu/melissa-jones-9.html">
                                                Andra Flatcher
                                            </a>
                                        </h3>
                                        <span>Lead Teacher</span>
                                        <p className="mk-truncate-3">
                                            Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey
                                            guvnor in my flat, up the duff Eaton car
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="team__item text-center">
                                    <div className="team__thumb">
                                        <div className="team__shape">
                                            <Image
                                                srcset="https://nextgenes.edu.vn/img/team/team-shape-1.png"
                                                alt="NextGen"
                                                className=""
                                            />
                                        </div>
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/team-sm-1.webp"
                                            alt="NextGen"
                                            className=""
                                        />
                                    </div>
                                    <div className="team__content">
                                        <h3 className="team__title">
                                            <a href="https://nextgenes.edu.vn/doi-ngu/melissa-jones-9.html">
                                                Oliver Porter
                                            </a>
                                        </h3>
                                        <span>Photogrepher</span>
                                        <p className="mk-truncate-3">
                                            Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey
                                            guvnor in my flat, up the duff Eaton car
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
