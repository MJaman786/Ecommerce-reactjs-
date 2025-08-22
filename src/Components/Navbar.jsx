import "../Components/Navbar.css"
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">EStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ boxShadow: "none",outline:"none", border:"none" }}>
                        <span class="material-symbols-outlined text-light">
                            menu
                        </span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ boxShadow: "none" }}></button>
                        </div>
                        <div className="offcanvas-body bg-dark">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu mt-lg-3">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;