import React from 'react';

import PrintIcon from '../img/print.svg';

import '../styles/print.css'

class PrintOptions extends React.Component {
    constructor(props) {
        super(props);

        this.handleFontClick = this.handleFontClick.bind(this);
    }

    handleFontClick(fontChoice) {
        this.props.onFontClick(fontChoice);
    }

    render() {
        return (
            <div className='print-options no-print'>
                <div className='accent-options'>
                    <label className='accent-text' htmlFor='accent-color'>Choose accent color:</label>
                    <input className='color-picker' type='color' id='accent-color' name='accent-color' value='#e66465'/>
                </div>
                <div className='font-options'>
                    <span className='font-text'>Choose font:</span>
                    <div className='font-list'>
                        <span className='font-choice unbounded' onClick={() => this.handleFontClick('Unbounded')}>Unbounded</span>
                        <span className='divider'>●</span>
                        <span className='font-choice eb-garamond' onClick={() => this.handleFontClick('EB Garamond')}>EB Garamond</span>
                        <span className='divider'>●</span>
                        <span className='font-choice open-sans' onClick={() => this.handleFontClick('Open Sans')}>Open Sans</span>
                        <span className='divider'>●</span>
                        <span className='font-choice courier-prime' onClick={() => this.handleFontClick('Courier Prime')}>Courier Prime</span>
                        <span className='divider'>●</span>
                        <span className='font-choice josefin-sans' onClick={() => this.handleFontClick('Josefin Sans')}>Josefin Sans</span>
                        <span className='divider'>●</span>
                        <span className='font-choice torre-farfan' onClick={() => this.handleFontClick('Torre Farfan')}>Torre Farfan</span>
                    </div>
                </div>
                <div className='print-section' onClick={window.print}>
                    <span className='print-text'>Print Your CV</span>
                    <img src={PrintIcon} alt='Print your CV' />
                </div>
            </div>
            
        )
    }
}

export default PrintOptions;