import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import EmbedMap from '../components/EmbedMap';
import Footer from '../components/Footer';

/* Helpers */
import { fixUrl } from '../helpers';

const Index = () => {
    /* States */
    const [company, setCompany] = useState({
        Embed_map: '',
    });
    const [nav, setNav] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [mensProducts, setMensProducts] = useState([]);
    const [womensProducts, setWomensProducts] = useState([]);
    const [kidsProducts, setKidsProducts] = useState([]);
    const [accsProducts, setAccsProducts] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [businessHours, setBusinessHours] = useState([]);
    const [socialMedias, setSocialMedias] = useState([]);

    const adminUrl = fixUrl(process.env.ADMIN_URL, false);

    useEffect(() => {
        fetch(adminUrl + '/companies?_limit=1')
            .then((res) => res.json())
            .then((data) => {
                setCompany(data[0]);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/links')
            .then((res) => res.json())
            .then((data) => {
                setNav(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/slider-images')
            .then((res) => res.json())
            .then((data) => {
                setSliderImages(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/men-s-collections')
            .then((res) => res.json())
            .then((data) => {
                setMensProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/women-s-collections')
            .then((res) => res.json())
            .then((data) => {
                setWomensProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/kid-s-collections')
            .then((res) => res.json())
            .then((data) => {
                setKidsProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/accessories')
            .then((res) => res.json())
            .then((data) => {
                setAccsProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/gallery-images')
            .then((res) => res.json())
            .then((data) => {
                setGalleryImages(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/business-hours')
            .then((res) => res.json())
            .then((data) => {
                setBusinessHours(data);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch(adminUrl + '/social-medias')
            .then((res) => res.json())
            .then((data) => {
                setSocialMedias(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Head />

            <main>
                <div className="sticky-top">
                    <Navbar company={company} nav={nav} />
                </div>

                <Slider sliderImages={sliderImages} />
                <Products id="men-s-collections" title="Men's Collections" products={mensProducts} />
                <Products id="women-s-collections" title="Women's Collections" products={womensProducts} />
                <Products id="kid-s-collections" title="Kid's Collections" products={kidsProducts} />
                <Products id="accessories" title="Accessories" products={accsProducts} />
                <Gallery galleryImages={galleryImages} />
                <EmbedMap className="mt-5" embedMap={company.Embed_map} />
                <Footer company={company} businessHours={businessHours} nav={nav} socialMedias={socialMedias} />
            </main>
        </div>
    );
};

export default Index;