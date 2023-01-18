import React from 'react';

import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        const year = new Date().getFullYear();
        return (
            <footer className='no-print'>
                <p>cv generator</p>
                <p>copyright © {year}</p>
                <p>ssbbd</p>
            </footer>
        )
    }
}

export default Footer;