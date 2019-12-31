import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import ContentLoader from 'react-content-loader';

/* Helpers */
import { range, escapedNewLineToLineBreakTag } from '../helpers';

const FooterNavItem = ({ title, link }) => (
    <li className="nav-item">
        <Link
            className="nav-link"
            to={link}
            smooth={true}
            duration={500}
            offset={-61}
        >
            {title}
        </Link>
    </li>
)

const FooterNavItemLoader = () => (
    <li className="nav-item">
        <span className="nav-link">
            <ContentLoader
                height={12}
                width={120}
                speed={2}
                primaryColor="#8b463d"
                secondaryColor="#8e4b42"
                style={{
                    marginTop: -1,
                    height: 12
                }}
            >
                <rect x="0" y="0" rx="4" ry="4" width="75" height="12" />
            </ContentLoader>
        </span>
    </li>
);

const FooterBusinessHour = ({ day, hour }) => (
    <li className="nav-item">
        <div className="d-flex">
            <span className="font-weight-bold mr-auto">{day}</span>
            <span>{hour}</span>
        </div>
    </li>
);

const FooterBusinessHourLoader = () => (
    <li className="nav-item">
        <div className="d-flex">
            <span className="font-weight-bold mr-auto">
                <ContentLoader
                    height={12}
                    width={30}
                    speed={2}
                    primaryColor="#8b463d"
                    secondaryColor="#8e4b42"
                    style={{
                        marginTop: -5,
                        height: 12
                    }}
                >
                    <rect x="0" y="0" rx="4" ry="4" width="30" height="12" />
                </ContentLoader>
            </span>
            <span>
                <ContentLoader
                    height={12}
                    width={125}
                    speed={2}
                    primaryColor="#8b463d"
                    secondaryColor="#8e4b42"
                    style={{
                        marginTop: -5,
                        height: 12
                    }}
                >
                    <rect x="0" y="0" rx="4" ry="4" width="125" height="12" />
                </ContentLoader>
            </span>
        </div>
    </li>
);

const FooterSocialMedia = ({ icon, title, link }) => (
    <li className="nav-item">
        <a href={link} target="_blank" rel="noopener" className={'nav-link ' + title.toLowerCase()} aria-label={title}>
            <i className={'fab fa-lg fa-' + icon} />
        </a>
    </li>
);

const FooterSocialMediaLoader = () => (
    <li className="nav-item">
        <span className="nav-link">
            <ContentLoader
                height={45}
                width={45}
                speed={2}
                primaryColor="#8b463d"
                secondaryColor="#8e4b42"
                style={{ height: 45 }}
            >
                <rect x="0" y="0" rx="4" ry="4" width="45" height="45" />
            </ContentLoader>
        </span>
    </li>
)

const Footer = ({ company, nav, businessHours, socialMedias }) => {
    return (
        <footer id="footer" className="bg-primary text-white text-center text-lg-left">
            <div className="container">
                <div className="footer-panel py-5">
                    <div className="row">

                        {/* Infomration */}
                        <div className="col-lg-3">
                            <div className="footer-information mb-5 mb-lg-0">
                                <h1 className="rufina h5 mb-4 pb-1">
                                    {company.title ? company.title : (
                                        <ContentLoader
                                            height={22}
                                            width={215}
                                            speed={2}
                                            primaryColor="#8b463d"
                                            secondaryColor="#8e4b42"
                                            style={{ height: 22 }}
                                        >
                                            <rect x="0" y="0" rx="4" ry="4" width="215" height="22" />
                                        </ContentLoader>
                                    )}
                                </h1>

                                <div className="mb-3">
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-map-marker-alt mr-1" /> Address</h2>
                                    <p className="small mb-0">
                                        {company.address ? escapedNewLineToLineBreakTag(company.address) : (
                                            <ContentLoader
                                                height={121}
                                                width={225}
                                                speed={2}
                                                primaryColor="#8b463d"
                                                secondaryColor="#8e4b42"
                                                style={{
                                                    marginTop: 5,
                                                    height: 121
                                                }}
                                            >
                                                <rect x="0" y="0" rx="4" ry="4" width="205" height="12" />
                                                <rect x="0" y="21" rx="4" ry="4" width="45" height="12" />
                                                <rect x="0" y="42" rx="4" ry="4" width="25" height="12" />
                                                <rect x="0" y="63" rx="4" ry="4" width="70" height="12" />
                                                <rect x="0" y="84" rx="4" ry="4" width="225" height="12" />
                                                <rect x="0" y="105" rx="4" ry="4" width="62" height="12" />
                                            </ContentLoader>
                                        )}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-phone mr-1" /> Contact</h2>
                                    <p className="small mb-0">
                                        {company.phone ? company.phone : (
                                            <ContentLoader
                                                height={12}
                                                width={120}
                                                speed={2}
                                                primaryColor="#8b463d"
                                                secondaryColor="#8e4b42"
                                                style={{
                                                    marginTop: -5,
                                                    height: 12
                                                }}
                                            >
                                                <rect x="0" y="0" rx="4" ry="4" width="100" height="12" />
                                            </ContentLoader>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-3">
                            <div className="footer-nav mb-5 mb-lg-0">
                                <h1 className="h5 font-weight-bold mb-4">Navigation</h1>

                                <ul className="nav flex-column small">
                                    {nav.length ? nav.map((navItem) => (
                                        <FooterNavItem title={navItem.title} link={navItem.link} key={navItem.id} />
                                    )) : range(0, 5).map((key) => (
                                        <FooterNavItemLoader key={key} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="col-lg-3">
                            <div className="footer-business-hours mb-5 mb-lg-0">
                                <h1 className="h5 font-weight-bold mb-4">Business Hours</h1>
                                <ul className="nav flex-column col-8 col-lg-9 mx-auto mx-lg-0 px-0 small text-left">
                                    {businessHours.length ? businessHours.map((businessHour) => (
                                        <FooterBusinessHour day={businessHour.day} hour={businessHour.hour} key={businessHour.id} />
                                    )) : range(0, 7).map((key) => (
                                        <FooterBusinessHourLoader key={key} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="col-lg-3">
                            <div className="footer-social-medias">
                                <h1 className="h5 font-weight-bold mb-4">Follow Us</h1>
                                <ul className="nav m-min-1 justify-content-center justify-content-lg-start">
                                    {socialMedias.length ? socialMedias.map((socialMedia) => (
                                        <FooterSocialMedia icon={socialMedia.icon} title={socialMedia.title} link={socialMedia.link} key={socialMedia.id} />
                                    )) : range(0, 3).map((key) => (
                                        <FooterSocialMediaLoader key={key} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright text-center py-3 px-2 border-top border-white-transparent">
                <p className="small mb-0">
                    {company.title ? (
                        <span>&copy; <a href="#">Optik Atan Raya Jogja</a> 2019 · Developed by <a href="#">Alterweb</a></span>
                    ) : (<ContentLoader
                        height={12}
                        width={352}
                        speed={2}
                        primaryColor="#8b463d"
                        secondaryColor="#8e4b42"
                        style={{ height: 12 }}
                    />)}

                </p>
            </div>

        </footer>
    );
};

Footer.propTypes = {
    company: PropTypes.object.isRequired,
    nav: PropTypes.array.isRequired,
    businessHours: PropTypes.array.isRequired,
    socialMedias: PropTypes.array.isRequired,
};

FooterNavItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

FooterBusinessHour.propTypes = {
    day: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
};

FooterSocialMedia.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Footer;