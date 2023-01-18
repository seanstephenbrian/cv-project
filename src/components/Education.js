import React from 'react';

import Add from '../components/Add';

import '../styles/education.css';

class Education extends React.Component {

    constructor(props) {
        super(props);
        this.editEducation = this.editEducation.bind(this);
    }

    editEducation() {
        this.props.startEditingEducation();
    }
    
    render() {
        const { educationInfo } = this.props;
        return (
            <div className='education-section'>
                <div className='education-section-title'>
                    <span className='education-title-border'>Education</span>
                    <div className='edit-button edit-education no-print' onClick={this.editEducation}>Edit</div>
                </div>
                {educationInfo.map((entry) => {
                    if (entry.subject) {
                        return (
                            <div className="education-entry" key={entry.id}>
                                <div className='education-info'>
                                    <h1 className='school-name'>{entry.school}</h1>
                                    <h2 className='school-dates'>{entry.dates}</h2>
                                    <h2 className='school-degree'>{entry.degree}, {entry.subject}</h2>
                                </div>
                                <div className='education-description'>
                                    <h3 className='description-label'>Additional details:</h3>
                                    <p className='description-text'>{entry.additional}</p>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div className="education-entry" key={entry.id}>
                            <div className='education-info'>
                            <h1 className='school-name'>{entry.school}</h1>
                                    <h2 className='school-dates'>{entry.dates}</h2>
                                    <h2 className='school-degree'>{entry.degree}</h2>
                            </div>
                            <div className='education-description'>
                                <h3 className='description-label'>Additional details:</h3>
                                <p className='description-text'>{entry.additional}</p>
                            </div>
                        </div>
                    )
                })}
                <Add section="education" />
            </div>
        )
    }
}

export default Education;