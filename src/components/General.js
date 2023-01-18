import React from 'react';

import '../styles/general.css';

class General extends React.Component {

    render() {
        const { name, email, phone, location, headshot } = this.props.generalInfo;
        return (
            <div className='general-info'>
                <div className='name'>{name}</div>
                <div className='email'>{email}</div>
                <div className='phone'>{phone}</div>
                <div className='location'>{location}</div>
                <div className='headshot-container'>
                <img className="headshot-img" src={headshot} alt={name}></img>
                </div>
            </div>
        )
    }
}

export default General;