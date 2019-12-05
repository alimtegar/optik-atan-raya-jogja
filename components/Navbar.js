const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" id="navbar">
            <div className="container">
                <a className="navbar-brand rufina h5 m-0 p-0" href="#">Optik Atan Raya Jogja</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbar-supported-content" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Men's Collection</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Women's Collection</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                    </ul>
                </div>

                <div className="ml-3">
                    <button className="btn btn-primary shadow-sm">
                        ORDER NOW
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;