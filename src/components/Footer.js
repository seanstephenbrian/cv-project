import React, { useState } from 'react';

import '../styles/footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='copyright no-print'>
            <p>cv generator</p>
            <p>copyright © {year}</p>
            <p>ssbbd</p>
        </footer>
    )
}

export default Footer;