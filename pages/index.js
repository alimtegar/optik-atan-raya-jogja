/* Components */
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';

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
            </main>
        </div>
    );
};

export default Index;