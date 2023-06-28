import Image from 'next/image';

function FooterDefault() {
    return (
        <footer className="footer">
            <div className="footer-top row"></div>
            <div className="footer-center row"></div>
            <div className="footer-bottom d-flex aligns-item">
                <hr className="footer-bottom-line" />
                <span>© 2023 NextGen Education & Solutions. All Rights Reserved</span>
            </div>
        </footer>
    );
}
export default FooterDefault;
