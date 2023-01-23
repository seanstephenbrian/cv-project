import React, { useState } from 'react';

import '../styles/general.css';

const General = (props) => {
    const { name, email, phone, location, oneLiner, headshot } = props.generalInfo;

    function handleEditClick() {
        props.onEditGeneralClick();
    }

    function handleSaveEditsClick() {
        props.onSaveEditsClick();
    }

    function handleGeneralInfoChange(property, e) {
        props.onGeneralInfoChange(property, e.target.value);
    }

    function returnEditButton() {
        const { editing } = props;
        if (editing === 'general') {
            return <div className='edit-button edit-general save-general-edits no-print' onClick={handleSaveEditsClick} >Save Edits</div>
        } else {
            return <div className='edit-button edit-general no-print' onClick={handleEditClick} >Edit</div>
        }
    }

    // editing view:
    if (props.editing === 'general') {
        return (
            <div className='editing-general-info'>
                <div className='edit-general-label'>Edit your personal information:</div>
                <div className='item-edits name-edits'>
                    <label className='edits-label' htmlFor='name'>Name:</label>
                    <input 
                        className='edits-input' 
                        name="name"
                        onChange={(e) => {handleGeneralInfoChange('name', e)}} 
                        type="text"
                        value={name}
                    />
                </div>
                <div className='item-edits email-edits'>
                    <label className='edits-label' htmlFor='email'>Email:</label>
                    <input 
                        className='edits-input' 
                        name="email"
                        onChange={(e) => {handleGeneralInfoChange('email', e)}} 
                        type="text"
                        value={email}
                    />
                </div>
                <div className='item-edits phone-edits'>
                    <label className='edits-label' htmlFor='phone'>Phone:</label>
                    <input 
                        className='edits-input' 
                        name="phone"
                        onChange={(e) => {handleGeneralInfoChange('phone', e)}} 
                        type="text"
                        value={phone}
                    />
                </div>
                <div className='item-edits one-liner-edits'>
                    <label className='edits-label' htmlFor='one-liner'>One-line summary:</label>
                    <textarea 
                        className='edits-input' 
                        name="one-liner"
                        onChange={(e) => {handleGeneralInfoChange('oneLiner', e)}} 
                        value={oneLiner}
                    />
                </div>
                <div className='item-edits location-edits'>
                    <label className='edits-label' htmlFor='location'>Location:</label>
                    <input 
                        className='edits-input' 
                        name="location"
                        onChange={(e) => {handleGeneralInfoChange('location', e)}} 
                        type="text"
                        value={location}
                    />
                </div>
                {returnEditButton()}
                {/* <div className='headshot-container'>
                    <img className="headshot-img" src={headshot} alt={name}></img>
                </div> */}
            </div>
        )
    // default view:
    } else {
        return (
            <div className='general-info'>
                <div className='name'><span className='name-border' style={{backgroundColor: props.accentColor}}>{name}</span></div>
                {returnEditButton()}
                <div className='email'>{email}</div>
                <div className='phone'>{phone}</div>
                <div className='one-liner'>{oneLiner}</div>
                <div className='location'>{location}</div>
                <div className='headshot-container'>
                    {/* <img className="headshot-img" src={headshot} alt={name}></img> */}
                </div>
            </div>
        )
    }
    
};

export default General;