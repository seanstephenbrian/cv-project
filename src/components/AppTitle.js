import React from 'react';

import '../styles/app-title.css';

class AppTitle extends React.Component {
    render() {
        return (
            <div className='app-title-container no-print'>
                <span className='app-title-text'>CV Generator</span>
            </div>
        )
    }
}

export default AppTitle;