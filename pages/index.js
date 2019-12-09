/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
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
                <Products />
                <Products />
                <Products />
                <Footer />
            </main>
        </div>
    );
};

export default Index;