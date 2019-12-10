import PropTypes from 'prop-types'
import Slider from "react-slick";

const Products = ({ title }) => {
    const settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <section className="products py-5">

            <div className="products-header mb-5">
                <div className="container">
                    <h1 className="rufina h2 mb-3">Men's Collections</h1>
                    <hr className="divider border-primary" />
                </div>
            </div>

            <div className="products-body my-min-2">
                <Slider {...settings}>
                    {[...Array(7)].map(() => (
                        <div className="p-2">
                            <div className="products-item shadow-sm overflow-hidden">
                                <div className="item-image">
                                    <figure class="effect-chico w-100 h-100">
                                        <img src="/static/images/slider-1.jpeg" alt="" className="fit-height" />
                                        <figcaption>
                                            <p className="font-weight-bold">
                                                <button className="btn btn-outline-light">
                                                    VIEW DETAIL
                                                </button>
                                            </p>
                                            <a href="#">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="item-text w-100 p-3">
                                    <h2 className="h6 font-weight-bold mb-0">Frame BVL4032</h2>
                                    <p className="small text-muted mb-0">IDR 1.000.000· 60#14-145</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Products;