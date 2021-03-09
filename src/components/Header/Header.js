import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="/">SmartShop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav ms-auto fs-5">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/shop">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/review">review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/inventory">Inventory Mange</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;