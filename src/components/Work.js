import React from 'react';

import Add from './Add';

import '../styles/work.css';

class Work extends React.Component {
    render() {
        const { workInfo } = this.props;
        return (
            <div className='work-section'>
                <div className='work-section-title'>
                    <span className='work-title-border'>Work</span>
                </div>
                {workInfo.map((entry) => {
                    return (
                        <div className="work-entry" key={entry.id}>
                            <div className='work-info'>
                                <h1 className='company-name'>{entry.company}</h1>
                                <h2 className='job-title'>{entry.title}</h2>
                                <h3 className='company-location'>{entry.location}</h3>
                                <h3 className='job-dates'>{entry.years}</h3>
                            </div>
                            <div className='job-description'>
                                <p className='description-label'>Description:</p>
                                <p className='description-text'>{entry.description}</p>
                            </div>
                        </div>
                    )
                })}
                <Add section="work" />
            </div>
        )
    }
}

export default Work;