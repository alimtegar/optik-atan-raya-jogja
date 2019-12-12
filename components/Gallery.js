import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

const GalleryItem = ({ image, group }) => {
    return (
        <div className="gallery-item shadow-sm">
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
        </div>
    );
};

const Gallery = () => {    
    return (
        <section id="gallery" className="py-5">
            <div className="container">
                <div className="gallery-header mb-5">
                    <h1 className="rufina h2 mb-3">Image Gallery</h1>
                    <hr className="divider border-primary" />
                </div>

                <div className="gallery-body">
                    <LightgalleryProvider>
                        <div className="row m-min-2">
                            {[...Array(7)].map((_, key) => (
                                <div className="col-lg-3 p-1" key={key}>
                                    <GalleryItem image={`https://picsum.photos/id/16${key}/300/300`} group="gallery"/>
                                </div>
                            ))}
                        </div>
                    </LightgalleryProvider>
                </div>
            </div>
        </section>
    );
};

export default Gallery;