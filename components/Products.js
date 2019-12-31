import PropTypes from 'prop-types'
import Slider from "react-slick";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import ContentLoader from 'react-content-loader'

/* Components */
import { SliderNextArrow, SliderPrevArrow } from './SliderArrows';

/* Helpers */
import { range } from '../helpers';

const ProductsItem = ({ image, group }) => {
    return (
        <div className="products-item shadow-sm overflow-hidden">
            <LightgalleryItem
                subHtml={`
                    <h2 class="h6 font-weight-bold mb-0">Frame BVL4032</h2>
                    <p class="small mb-0">IDR 150.000· 60#14-145</p>
                `}
                group={group}
                src={image}>
                <div className="item-image">
                    <figure className="effect-chico w-100 h-100">
                        <img src={image} alt="Products Item" className="fit-width" />

                        <figcaption>
                            <p className="font-weight-bold">
                                <button className="btn btn-outline-light square shadow-sm" aria-label="View Detail">
                                    <i className="fa fa-expand fa-lg" />
                                </button>
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </LightgalleryItem>

            <div className="item-text w-100 p-3">
                <h2 className="h6 font-weight-bold mb-0">Frame + Lensa Anti Radiasi EMI</h2>
                <p className="small text-muted mb-0">IDR 150.000· 50#18-138</p>
            </div>
        </div >
    );
};

const ProductsItemLoader = () => (
    <ContentLoader
        height={500}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
    >
        <rect x="0" y="0" rx="4" ry="4" width="400" height="400" />
        <rect x="24" y="424" rx="4" ry="4" width="250" height="20" />
        <rect x="24" y="458" rx="4" ry="4" width="200" height="14" />
    </ContentLoader>

);

const Products = ({ id, title, products }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,

        nextArrow: <SliderNextArrow />,
        prevArrow: <SliderPrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <section id={id} className="products py-5 overflow-hidden">
            <div className="products-header mb-5">
                <div className="container">
                    <h1 className="rufina h2 mb-3">{title}</h1>
                    <hr className="divider border-primary" />
                </div>
            </div>

            <div className="position-relative">
                <div className="container">
                    <div className="products-body m-min-1">
                        <LightgalleryProvider>
                            <Slider {...settings}>
                                {products.length ? products.map((_, key) => (
                                    <div className="p-1" key={key}>
                                        <ProductsItem image="/static/images/products-4.jpg" group={id} />
                                    </div>
                                )) : range(0, 5).map((key) => (
                                    <div className="p-1" key={key}>
                                        <ProductsItemLoader />
                                    </div>
                                ))}
                            </Slider>
                        </LightgalleryProvider>
                    </div>
                </div>
            </div>
        </section>
    );
};

Products.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
};

ProductsItem.propTypes = {
    image: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

export default Products;