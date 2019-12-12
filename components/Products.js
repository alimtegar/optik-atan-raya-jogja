import PropTypes from 'prop-types'
import Slider from "react-slick";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

const ProductsItem = ({ image, group }) => {
    return (
        <div className="products-item shadow-sm overflow-hidden">
            <LightgalleryItem group={group} src={image}>
                <div className="item-image">
                    <figure className="effect-chico w-100 h-100">
                        <img src={image} alt="Products Item" className="fit-height" />

                        <figcaption>
                            <p className="font-weight-bold">
                                <button className="btn btn-outline-light shadow-sm">VIEW DETAIL</button>
                            </p>
                            <a>View more</a>
                        </figcaption>
                    </figure>
                </div>
            </LightgalleryItem>

            <div className="item-text w-100 p-3">
                <h2 className="h6 font-weight-bold mb-0">Frame BVL4032</h2>
                <p className="small text-muted mb-0">IDR 1.000.000· 60#14-145</p>
            </div>
        </div >
    );
};

const Products = ({ id, title }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
    };

    return (
        <section id={id} className="products py-5 overflow-hidden">
            <div className="container">
                <div className="products-header mb-5">
                    <h1 className="rufina h2 mb-3">{title}</h1>
                    <hr className="divider border-primary" />
                </div>

                <div className="products-body m-min-1">
                    <LightgalleryProvider>
                        <Slider {...settings}>
                            {[...Array(7)].map((_, key) => (
                                <div className="p-1" key={key}>
                                    <ProductsItem image={`https://picsum.photos/id/17${key}/300/300`} group={id} />
                                </div>
                            ))}
                        </Slider>
                    </LightgalleryProvider>
                </div>
            </div>
        </section>
    );
};

Products.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

ProductsItem.propTypes = {
    image: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

export default Products;