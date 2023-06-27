import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function HeaderDefault() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="header-wrapper">
            <div id="header-sticky" class={`header__area header__transparent ${isSticky ? 'header-sticky' : ''}`}>
                <div className="header__bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-11 col-md-11 col-6">
                                <div className="header__bottom-left d-flex align-items-center">
                                    <div className="logo">
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/logo-2-1.webp"
                                            alt="NextGen Logo"
                                            className=""
                                        />
                                    </div>
                                    <div className="main-menu main-menu-border d-lg-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li>
                                                    <Link className="navbar-selected" href="/">
                                                        Trang chủ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/gioi-thieu">Về chúng tôi</Link>
                                                </li>
                                                <li>
                                                    <Link href="/khoa-hoc">Khóa học</Link>
                                                </li>
                                                <li>
                                                    <Link href="/doi-ngu">Đội ngũ</Link>
                                                </li>
                                                <li>
                                                    <Link href="/ban-tin">Bản tin NextGen</Link>
                                                    <ul className="submenu">
                                                        <li>
                                                            <Link href="/video-tips"></Link>Video & Tips
                                                        </li>
                                                        <li>
                                                            <Link href="/ux-design"></Link>UX Design
                                                        </li>
                                                        <li>
                                                            <Link href="/eduation"></Link>Education
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/lien-he">Liên hệ</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-xl-1 col-6">
                                <div className="header__bottom-right">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default HeaderDefault;
