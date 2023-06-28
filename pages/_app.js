import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import HeaderDefault from '@/components/header/HeaderDefault';
import FooterDefault from '@/components/footer/FooterDefault';
export default function App({ Component, pageProps }) {
    return (
        <>
            <HeaderDefault />
            <Component {...pageProps} />
            <FooterDefault />
        </>
    );
}
