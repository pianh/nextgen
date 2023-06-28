import Image from 'next/image';
import Link from 'next/link';

function FooterDefault() {
    return (
        <footer className="footer grey-bg">
            <div className="footer-top pt-95 pb-45">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="footer__widget footer-col-2-1 mb-50">
                                <div className="footer__logo">
                                    <Link href="/">
                                        <Image
                                            srcset="https://api.nextgenes.edu.vn/storage/logo-2-1.webp"
                                            alt="NextGen"
                                            className=""
                                        />
                                    </Link>
                                </div>
                                <div className="footer__widget-content">
                                    <p>Mã số thuế: 0317840745</p>
                                    <p>
                                        <strong>Văn phòng đại diện: </strong> Tầng 21, Tòa nhà Viettel Complex Tower,
                                        285 Cách Mạng Tháng 8, P. 12, Q. 10, Tp. HCM, Việt Nam.
                                    </p>
                                    <p>
                                        <strong>Cơ sở đào tạo: </strong> Số 7-9 Nguyễn Bỉnh Khiêm, Phường Bến Nghé, Quận
                                        1, Thành phố Hồ Chí Minh, Việt Nam.
                                    </p>
                                    <div className="footer__social">
                                        <h4>Theo dõi chúng tôi</h4>
                                        <ul>
                                            <li>
                                                <a href="" target="_blank">
                                                    <i class="fa-brands fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="nextgen" target="_blank" rel="noreferrer">
                                                    <i class="fa-brands fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="nextgen" target="_blank" rel="noreferrer">
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2">
                            <div className="footer__widget">
                                <h3 class="footer__widget-title">Explore</h3>
                                <div className="footer__widget-content">
                                    <ul>
                                        <li>
                                            <a href="/gioi-thieu">Về chúng tôi</a>
                                        </li>
                                        <li>
                                            <a href="/gioi-thieu">Khóa học</a>
                                        </li>
                                        <li>
                                            <a href="/gioi-thieu">Đội ngũ</a>
                                        </li>
                                        <li>
                                            <a href="/gioi-thieu">Bản tin</a>
                                        </li>
                                        <li>
                                            <a href="/gioi-thieu">Liên hệ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2">
                            <div className="footer__widget">
                                <h3 class="footer__widget-title">Links</h3>
                                <div className="footer__widget-content">
                                    <ul>
                                        <li>
                                            <a href="/gioi-thieu">Video & Tips</a>
                                        </li>
                                        <li>
                                            <a href="/gioi-thieu">Education</a>
                                        </li>
                                        <li>
                                            <a href="/gioi-thieu">UX Design</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="footer__widget">
                                <h3 class="footer__widget-title">Đăng ký nhận bản tin của chúng tôi</h3>
                                <div className="footer__sub"></div>
                                <p>
                                    Nhận bản tin hàng tuần với các tài liệu giáo dục, sách nổi tiếng và nhiều hơn nữa!
                                </p>
                                <form method="post">
                                    <div>
                                        <div className="input-group">
                                            <input name="name" placeholder="Họ và tên" className="form-control" />
                                        </div>
                                        <div class="form-error-msg">Vui lòng nhập tên</div>
                                    </div>
                                    <div>
                                        <div className="input-group">
                                            <input name="phone" placeholder="Họ và tên" className="form-control" />
                                        </div>
                                        <div class="form-error-msg">Vui lòng nhập số điện thoại</div>
                                    </div>
                                    <div>
                                        <div className="input-group">
                                            <input name="email" placeholder="Họ và tên" className="form-control" />
                                        </div>
                                        <div class="form-error-msg">Vui lòng nhập Email</div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="tp-btn-subscribe btn btn-success"
                                        style={{ minWidth: '100px' }}
                                    >
                                        Đăng ký
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom grey-bg">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <div className="row">
                            <div className="col-xxl-12">
                                <hr className="footer-bottom-line" />
                                <span>© 2023 NextGen Education & Solutions. All Rights Reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default FooterDefault;
