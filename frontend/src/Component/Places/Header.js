import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Navbar from '../Navbar/Navbar'


const Header = () => {
    return (
        <>
            <Navbar/>
            <div>
                <div className="header-container">
                    <header id="header_places">
                        <div className="overlay_places">
                            <h1 className="titel_h1_places">Simply The Best</h1>
                            <h3 className="titel_h3_places">Reasons for Choosing US</h3>
                            <p className="parg_places">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                            <br />
                            <button className="Bt_2_places">READ MORE</button>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
};

export default Header;