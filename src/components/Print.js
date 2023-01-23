import React, { useState } from 'react';

import PrintIcon from '../img/print.svg';

import '../styles/print.css'

const PrintOptions = (props) => {
    function handleColorChange(e) {
        props.onColorChange(e.target.value);
    }

    function handleFontClick(fontChoice) {
        props.onFontClick(fontChoice);
    }

    return (
        <div className='print-options no-print'>
            <div className='accent-options'>
                <label className='accent-text' htmlFor='accent-color'>Choose accent color:</label>
                <input className='color-picker' type='color' id='accent-color' name='accent-color' value={props.accentColor} onChange={handleColorChange} />
            </div>
            <div className='font-options'>
                <span className='font-text'>Choose font:</span>
                <div className={'font-list ' + props.selectedFont}>
                    <span className='font-choice open-sans' onClick={() => handleFontClick('Open Sans')}>Open Sans</span>
                    <span className='divider'>●</span>
                    <span className='font-choice josefin-sans' onClick={() => handleFontClick('Josefin Sans')}>Josefin Sans</span>
                    <span className='divider'>●</span>
                    <span className='font-choice unbounded' onClick={() => handleFontClick('Unbounded')}>Unbounded</span>
                    <span className='divider'>●</span>
                    <span className='font-choice courier-prime' onClick={() => handleFontClick('Courier Prime')}>Courier Prime</span>
                    <span className='divider'>●</span>
                    <span className='font-choice eb-garamond' onClick={() => handleFontClick('EB Garamond')}>EB Garamond</span>
                    <span className='divider'>●</span>
                    <span className='font-choice torre-farfan' onClick={() => handleFontClick('Torre Farfan')}>Torre Farfan</span>
                </div>
            </div>
            <div className='print-section' onClick={window.print}>
                <span className='print-text'>Print Your CV</span>
                <img src={PrintIcon} alt='Print your CV' />
            </div>
        </div>
        
    )
};

export default PrintOptions;