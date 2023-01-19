import React from 'react';

import '../styles/general.css';

class General extends React.Component {

    constructor(props) {
        super(props);

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveEditsClick = this.handleSaveEditsClick.bind(this);
        this.returnEditButton = this.returnEditButton.bind(this);
    }

    handleEditClick() {
        this.props.onEditGeneralClick();
    }

    handleSaveEditsClick() {
        alert('handle save edits');
    }

    returnEditButton() {
        const { editing } = this.props;
        if (editing === 'general') {
            return <div className='edit-button edit-general no-print' onClick={this.handleSaveEditsClick} >Save Edits</div>
        } else {
            return <div className='edit-button edit-general no-print' onClick={this.handleEditClick} >Edit</div>
        }
    }

    render() {
        const { name, email, phone, location, oneLiner, headshot } = this.props.generalInfo;
        return (
            <div className='general-info'>
                <div className='name'><span className='name-border'>{name}</span></div>
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

export default General;