import { useState } from 'react';
import PropTypes from 'prop-types';
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import ContentLoader from 'react-content-loader'
import { fixUrl, range, measureFit } from '../helpers';

const GalleryItem = ({ title, image, group }) => {
    const [fit, setfFt] = useState('fit-width');

    const containerWidth = 272;
    const containerHeight = 270;

    return (
        <div className="gallery-item shadow-sm">
            <LightgalleryItem
                subHtml={`
                    <h2 class="h6 font-weight-bold mb-0">${title}</h2>
                `}
                group={group}
                src={image}
            >
                <div className="item-image">
                    <figure className="effect-goliath w-100 h-100">
                        <img src={image} alt={title} className={fit} onLoad={(e) => setfFt(measureFit(containerWidth, containerHeight, e.target.offsetWidth, e.target.offsetHeight))} />

                        <figcaption>
                            <p class="d-flex align-items-center">
                                <span>Click to Preview</span>
                                <i className="fa fa-chevron-right fa-sm ml-auto" />
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </LightgalleryItem>
        </div>
    );
};

const GalleryItemLoader = () => (
    <ContentLoader
        height={400}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
    >
    </ContentLoader>
);

const Gallery = ({ galleryImages }) => {
    return (
        <section id="gallery" className="py-5">
            <div className="container">
                <div className="gallery-header mb-5">
                    <h1 className="rufina h2 mb-3">Image Gallery</h1>
                    <hr className="divider border-primary" />
                </div>

                <div className="gallery-body">
                    <LightgalleryProvider>
                        <div className="row m-min-1">
                            {galleryImages.length ? galleryImages.map((galleryImage) => (
                                <div className="col-6 col-lg-3 p-1" key={galleryImage.id}>
                                    <GalleryItem title={galleryImage.title} image={fixUrl(process.env.ADMIN_URL) + galleryImage.image.url} group="gallery" />
                                </div>
                            )) : range(0, 7).map((key) => (
                                <div className="col-6 col-lg-3 p-1" key={key}>
                                    <GalleryItemLoader />
                                </div>
                            ))}
                        </div>
                    </LightgalleryProvider>
                </div>
            </div>
        </section>
    );
};

Gallery.propTypes = {
    galleryImages: PropTypes.array.isRequired,
};

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
};

export default Gallery;