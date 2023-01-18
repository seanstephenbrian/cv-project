import React from 'react';

import '../styles/general.css';

class General extends React.Component {

    render() {
        const { name, email, phone, location, headshot } = this.props.generalInfo;
        return (
            <div>
                {name}, {email}, {phone}, {location}, <img className="headshot" src={headshot}></img>
            </div>
        )
    }
}

export default General;