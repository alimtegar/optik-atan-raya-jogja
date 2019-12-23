import PropTypes from 'prop-types';

const EmbedMap = ({ className, embedMap }) => {
    return (
        <section className={className}>
            <div dangerouslySetInnerHTML={{__html: embedMap}} />
        </section>
    );
};

EmbedMap.propTypes = {
    className: PropTypes.string,
    embedMap: PropTypes.string.isRequired,
};

export default EmbedMap;