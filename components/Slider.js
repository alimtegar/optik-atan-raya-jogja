import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader'

/* Components */
import { SliderNextArrow, SliderPrevArrow } from './SliderArrows';

/* Helpers */
import { fixUrl } from '../helpers';

const MySliderItem = ({title, subtitle, description, image}) => {
    return (
        <div className="slider-item position-relative d-flex justify-content-center align-items-center h-100">
            <div className="item-text-container position-absolute left-0 w-100">
                <div className="container">
                    <div className="item-text text-center text-lg-left text-shadow-sm col-lg-4 px-0">
                        <h2 className="rufina h5 m-0">{subtitle}</h2>
                        <h1 className="rufina h2 mb-3">{title}</h1>
                        <hr className="divider border-white mx-auto mx-lg-0 mb-3" />
                        <p className="small mb-0">{description}</p>
                    </div>
                </div>
            </div>

            <img src={image} className="fit-width" alt={title} />
        </div>
    );
};

const MySliderItemLoader = () => (
    <ContentLoader
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        className="w-100 h-100"
    >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
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
                {sliderImages.length ? sliderImages.map((sliderImage, key) => (
                    <MySliderItem title={sliderImage.title} subtitle={sliderImage.subtitle} description={sliderImage.description} image={fixUrl(process.env.ADMIN_URL) + sliderImage.image.url} key={sliderImage.id} />
                )) : (<MySliderItemLoader />)}
            </Slider>
        </div>
    );
};

MySlider.propTypes = {
    sliderImages: PropTypes.array.isRequired,
}

MySliderItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default MySlider;
