import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import ContentLoader from 'react-content-loader';

/* Helpers */
import { range } from '../helpers';

const NavbarNavItem = ({ title, link }) => {
    return (
        <li className="nav-item">
            <Link
                activeClass="active"
                className="nav-link"
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-61}
            >
                {title}
            </Link>
        </li>
    );
};

const NavbarNavItemLoader = () => (
    <li className="nav-item">
        <span className="nav-link">
            <ContentLoader
                height={19}
                width={80}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                style={{ height: 19 }}
            >
            </ContentLoader >
        </span>
    </li>
)

const NavbarBrandLoader = () => (
    <ContentLoader
        height={26}
        width={216}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        style={{ height: 26 }}
    >
    </ContentLoader >
)

const Navbar = ({ company, nav }) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 shadow-sm" id="navbar">
            <div className="container">
                <button
                    className="navbar-toggler square mr-auto rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-supported-content"
                    aria-controls="navbar-supported-content"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsShow(!isShow)}
                >
                    <i className="fa fa-bars" />
                </button>


                <a className="navbar-brand rufina h5 m-0 p-0" href="#">
                    {company.title ? company.title : (<NavbarBrandLoader />)}
                </a>


                <a href="tel:+62-877-7145-9754" target="_blank" rel="noopener" className="btn btn-primary square ml-auto shadow-sm d-inline-flex d-lg-none">
                    <i className="fa fa-phone fa-lg" />
                </a>

                <div id="navbar-supported-content" className={`${isShow ? 'show' : ''} collapse navbar-collapse`}>
                    <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                        {nav.length ? nav.map((navItem) => (
                            <NavbarNavItem title={navItem.title} link={navItem.link} key={navItem.id} />
                        )) : range(0, 5).map((key) => (
                            <NavbarNavItemLoader key={key} />
                        ))}
                    </ul>
                </div>

                <a href="tel:+62-877-7145-9754" target="_blank" rel="noopener" className="btn btn-primary ml-3 shadow-sm d-none d-lg-block">
                    ORDER NOW
                </a>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    company: PropTypes.object.isRequired,
    nav: PropTypes.array.isRequired,
};

NavbarNavItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Navbar;