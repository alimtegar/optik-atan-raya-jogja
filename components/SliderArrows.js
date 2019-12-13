export const SliderNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
        >
            <div className="btn btn-dark-transparent square shadow-sm">
                <i className="fa fa-chevron-right fa-lg x-1" />
            </div>
            
        </div>
    );
}

export const SliderPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={style}
            onClick={onClick}
        >
            <div className="btn btn-dark-transparent square shadow-sm">
                <i className="fa fa-chevron-left fa-lg x-min-1" />
            </div>
        </div>
    );
}