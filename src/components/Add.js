import React from 'react';

import AddIcon from '../img/add.svg';

import '../styles/add.css';

class Add extends React.Component {
    render() {
        const { section } = this.props;
        const addClasses = `no-print icon-wrapper add-${section}`;
        return (
            <div className={addClasses}>
                <img className='add-img' src={AddIcon} alt='Add'></img>
            </div>
        )
    }
}

export default Add;