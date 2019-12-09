import PropTypes from 'prop-types'
import Slider from "react-slick";

const Products = ({ title }) => {
    const settings = {
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    return (
        <section className="products py-5">

            <div className="products-header mb-5">
                <div className="container">
                    <h1 className="rufina h2 mb-2">Men's Collections</h1>
                    <hr className="divider border-primary" />
                </div>
            </div>

            <div className="products-body my-min-2">
                <Slider {...settings}>
                    {[...Array(5)].map(() => (
                        <div className="p-2">
                            <div className="products-item position-relative d-flex justify-content-center align-items-center text-white overflow-hidden">
                                <div className="item-text position-absolute left-0 bottom-0 w-100 p-4 pt-5">
                                    <h2 className="h6 font-weight-bold mb-0">Frame BVL4032</h2>
                                    <p className="small mb-0">IDR 1.000.000 · 60#14-145</p>
                                </div>

                                <img src="/static/images/slider-1.jpeg" alt="" className="fit-height" />
                            </div>
                        </div>
                    ))} 
                </Slider>
            </div>
        </section>
    );
};

export default Products;