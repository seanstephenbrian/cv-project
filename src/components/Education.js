import React from 'react';

import Add from '../components/Add';

class Education extends React.Component {
    render() {
        const { educationInfo } = this.props;
        return (
            <div className='education-section'>
                {educationInfo.map((entry) => {
                    if (entry.subject) {
                        return (
                            <div className="education-entry" key={entry.id}>
                                <h1>{entry.school}</h1>
                                <h2>{entry.dates}</h2>
                                <h2>{entry.degree}, {entry.subject}</h2>
                                <p>{entry.additional}</p>
                            </div>
                        )
                    }
                    return (
                        <div className="education-entry" key={entry.id}>
                            <h1>{entry.school}</h1>
                            <h2>{entry.dates}</h2>
                            <h2>{entry.degree}</h2>
                            <p>{entry.additional}</p>
                        </div>
                    )
                })}
                <Add section="education" />
            </div>
        )
    }
}

export default Education;