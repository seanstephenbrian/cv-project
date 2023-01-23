import React, { useState } from 'react';

import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <footer className='copyright no-print'>
                <p>cv generator</p>
                <p>copyright © {year}</p>
                <p>ssbbd</p>
            </footer>
        )
    }
}

export default Footer;