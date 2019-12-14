import PropTypes from 'prop-types';

const Location = ({ className }) => {
    return (
        <section id="location" className={className}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15812.072226396132!2d110.3584355!3d-7.7879098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f15f3d3ad34d6ff!2sOptik%20Atan%20Raya%20Jogja!5e0!3m2!1sen!2sid!4v1576334013011!5m2!1sen!2sid" 
                width="100%" 
                height="360" 
                frameBorder="0" 
                style={{ border: 0, }} 
                allowFullScreen
                title="Optik Atan Raya Jogja Location"
                className="mb-min-2"
            />
        </section>
    );
};

Location.propTypes = {
    className: PropTypes.string,
};

export default Location;