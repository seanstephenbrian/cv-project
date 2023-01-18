import React from 'react';

import Add from '../components/Add';

import '../styles/education.css';

class Education extends React.Component {

    constructor(props) {
        super(props);
        this.editEducation = this.editEducation.bind(this);
        this.saveEdits = this.saveEdits.bind(this);
    }

    editEducation() {
        this.props.startEditingEducation();
    }

    saveEdits() {
        alert('this will submit edits');
    }

    render() {
        const { educationInfo, editing } = this.props;

        // editing view:
        if (editing) {
            return (
                <div className='education-section'>
                    <div className='education-section-title'>
                        <span className='education-title-border'>Education</span>
                        <div className='edit-button edit-education no-print' onClick={this.submitEdits}>Save Edits</div>
                    </div>

                    {/* editable education entries: */}
                    {educationInfo.map((entry) => {
                        return (
                            <div key={entry.id} className='editing-education-entry'>
                                <div className='school-edits'>
                                    <label htmlFor='school'>School:</label>
                                    <input data-id={entry.id} type="text" name="school" value={entry.school} />
                                </div>
                                <div className='dates-edits'>
                                    <label htmlFor='dates'>Years of attendance:</label>
                                    <input data-id={entry.id} type='text' name='dates' value={entry.dates}></input>
                                </div>
                                <div className='degree-edits'>
                                    <label htmlFor='degree'>Degree/certification:</label>
                                    <input data-id={entry.id} type='text' name='degree' value={entry.degree}></input>
                                </div>
                                <div className='subject-edits'>
                                    <label htmlFor='subject'>Major/subject area:</label>
                                    <input data-id={entry.id} type='text' name='subject' value={entry.subject}></input>
                                </div>
                                <div className='additional-edits'>
                                    <label htmlFor='additional'>Additional information:</label>
                                    <textarea data-id={entry.id} name='additional' value={entry.additional}></textarea>
                                </div>
                                
                            </div>
                        )
                    })}
                    
                    <Add section="education" />
                </div>
            )
        }

        // normal view:
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