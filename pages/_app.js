import App from 'next/app';

/* Components */
import NextNProgress from '../components/NextNProgress';

/* Styles */
import "lightgallery.js/dist/css/lightgallery.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div>
                <NextNProgress color="#ff0000" />
                <Component {...pageProps} />
            </div>
        );
    }
}

export default MyApp;