import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader'

/* Components */
import { SliderNextArrow, SliderPrevArrow } from './SliderArrows';

const MySliderItem = () => {
    return (
        <div className="slider-item position-relative d-flex justify-content-center align-items-center h-100">
            <div className="item-text-container position-absolute left-0 w-100">
                <div className="container">
                    <div className="item-text text-center text-lg-left text-shadow-sm col-lg-4 px-0">
                        <h2 className="rufina h5 m-0">Welcome to</h2>
                        <h1 className="rufina h2 mb-3">Optik Atan Raya Jogja</h1>
                        <hr className="divider border-white mx-auto mx-lg-0 mb-3" />
                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
            </div>

            <img src="/static/images/slider.jpeg" className="fit-width" alt="Slider Item 1" />
        </div>
    );
};

const MySliderItemLoader = () => (
    <ContentLoader
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        className="w-100 h-100"
    />
)

const MySlider = ({ sliderImages }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />
    };

    return (
        <div id="slider" className="position-relative text-white overflow-hidden">
            <Slider {...settings}>
                {sliderImages.length ? sliderImages.map((_, key) => (
                    <MySliderItem key={key} />
                )) : (<MySliderItemLoader />)}
            </Slider>
        </div>
    );
};

MySlider.propTypes = {
    sliderImages: PropTypes.array.isRequired,
}

export default MySlider;
