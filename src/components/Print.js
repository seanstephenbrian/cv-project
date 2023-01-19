import React from 'react';

import PrintIcon from '../img/print.svg';

import '../styles/print.css'

class Print extends React.Component {
    render() {
        return (
            <div className='print-section no-print' onClick={window.print}>
                <span className='print-text'>Print Your CV</span>
                <img src={PrintIcon} alt='Print your CV' />
            </div>
        )
    }
}

export default Print;