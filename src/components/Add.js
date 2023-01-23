import React, { useState } from 'react';

import AddIcon from '../img/add.svg';

import '../styles/add.css';

const Add = (props) => {
    function handleAddClick() {
        props.onAddClick();
    }

    const addClasses = `no-print icon-wrapper add-${props.section}`;

    return (
        <div className={addClasses}>
            <img onClick={handleAddClick} className='add-img' src={AddIcon} alt='Add'></img>
        </div>
    )
};

export default Add;