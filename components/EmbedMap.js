import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const EmbedMap = ({ className, embedMap }) => {
    return (
        <section className={className}>
            {embedMap ? (<div style={{ marginBottom: -6 }} dangerouslySetInnerHTML={{ __html: embedMap }} />) : (
                <ContentLoader
                    height={360}

                    speed={2}
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb"
                    style={{ width: '100%', height: 360 }}
                >
                    <rect x="0" y="0" rx="0" ry="0" width="100%" height="360" />
                </ContentLoader >
            )}
        </section>
    );
};

EmbedMap.propTypes = {
    className: PropTypes.string,
    embedMap: PropTypes.string.isRequired,
};

export default EmbedMap;