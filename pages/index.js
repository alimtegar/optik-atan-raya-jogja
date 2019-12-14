/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <div>
            <Head />

            <main>
                <div className="sticky-top">
                    <Navbar />
                </div>

                <Slider />
                <Products id="mens-collections" title="Men's Collections" />
                <Products id="womens-collections" title="Women's Collections" />
                <Products id="kids-collections" title="Kid's Collections" />
                <Products id="accessories" title="Accessories" />
                <Gallery />
                <Location className="mt-5" />
                <Footer />
            </main>
        </div>
    );
};

export default Index;