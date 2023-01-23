import React, { useState } from 'react';

import '../styles/general.css';

class General extends React.Component {

    constructor(props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
        this.handleSaveEditsClick = this.handleSaveEditsClick.bind(this);
        this.returnEditButton = this.returnEditButton.bind(this);
    }

    handleEditClick() {
        this.props.onEditGeneralClick();
    }

    handleSaveEditsClick() {
        this.props.onSaveEditsClick();
    }

    handleGeneralInfoChange(property, e) {
        this.props.onGeneralInfoChange(property, e.target.value);
    }

    returnEditButton() {
        const { editing } = this.props;
        if (editing === 'general') {
            return <div className='edit-button edit-general save-general-edits no-print' onClick={this.handleSaveEditsClick} >Save Edits</div>
        } else {
            return <div className='edit-button edit-general no-print' onClick={this.handleEditClick} >Edit</div>
        }
    }

    render() {
        const { name, email, phone, location, oneLiner, headshot } = this.props.generalInfo;

        // editing view:
        if (this.props.editing === 'general') {
            return (
                <div className='editing-general-info'>
                    <div className='edit-general-label'>Edit your personal information:</div>
                    <div className='item-edits name-edits'>
                        <label className='edits-label' htmlFor='name'>Name:</label>
                        <input 
                            className='edits-input' 
                            name="name"
                            onChange={(e) => {this.handleGeneralInfoChange('name', e)}} 
                            type="text"
                            value={name}
                        />
                    </div>
                    <div className='item-edits email-edits'>
                        <label className='edits-label' htmlFor='email'>Email:</label>
                        <input 
                            className='edits-input' 
                            name="email"
                            onChange={(e) => {this.handleGeneralInfoChange('email', e)}} 
                            type="text"
                            value={email}
                        />
                    </div>
                    <div className='item-edits phone-edits'>
                        <label className='edits-label' htmlFor='phone'>Phone:</label>
                        <input 
                            className='edits-input' 
                            name="phone"
                            onChange={(e) => {this.handleGeneralInfoChange('phone', e)}} 
                            type="text"
                            value={phone}
                        />
                    </div>
                    <div className='item-edits one-liner-edits'>
                        <label className='edits-label' htmlFor='one-liner'>One-line summary:</label>
                        <textarea 
                            className='edits-input' 
                            name="one-liner"
                            onChange={(e) => {this.handleGeneralInfoChange('oneLiner', e)}} 
                            value={oneLiner}
                        />
                    </div>
                    <div className='item-edits location-edits'>
                        <label className='edits-label' htmlFor='location'>Location:</label>
                        <input 
                            className='edits-input' 
                            name="location"
                            onChange={(e) => {this.handleGeneralInfoChange('location', e)}} 
                            type="text"
                            value={location}
                        />
                    </div>
                    {this.returnEditButton()}
                    {/* <div className='headshot-container'>
                        <img className="headshot-img" src={headshot} alt={name}></img>
                    </div> */}
                </div>
            )
        // default view:
        } else {
            return (
                <div className='general-info'>
                    <div className='name'><span className='name-border' style={{backgroundColor: this.props.accentColor}}>{name}</span></div>
                    {this.returnEditButton()}
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
    }
}

export default General;