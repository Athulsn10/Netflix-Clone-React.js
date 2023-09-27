import React, { useEffect, useState } from "react";
import './Nav.css';

function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        // return () => {
        //     window.removeEventListener('scroll', () => {});
        // }
    }, []); 

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img width={'100px'} src="./netflix.png" alt="netflix logo" />
        </div>
    );
}

export default Nav;
