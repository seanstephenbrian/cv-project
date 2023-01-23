import React, { useState } from 'react';

import Add from '../components/Add';

import '../styles/education.css';

const Education = (props) => {

    const { educationInfo, editing } = props;

    function addEducationEntry() {
        props.createEducationEntry();
    }

    function handleDeleteClick(e) {
        props.onDeleteClick(e);
    }

    function handleEditClick() {
        props.onEditEducationClick();
    }

    function handleSaveEditsClick() {
        props.onSaveEditsClick();
    }

    function handleTextChange(section, e) {
        props.onTextChange(section, e.target.dataset.id, e.target.name, e.target.value);
    }

    // editing view:
    if (editing) {
        return (
            <div className='education-section'>
                <div className='education-section-title'>
                    <span className='education-title-border' style={{backgroundColor: props.accentColor}}>Education</span>
                    <div className='edit-button edit-education no-print' onClick={handleSaveEditsClick}>Save All Edits</div>
                </div>

                {/* editable education entries: */}
                {educationInfo.map((entry) => {
                    return (
                        <div key={entry.id} className='editing-entry'>
                            <div className='editing-entry-title'>
                                <span className='title-text'>Edit Item:</span>
                                <span className='delete-item' data-section='education' data-id={entry.id} onClick={handleDeleteClick}>Delete Item</span>
                            </div>
                            <div className='item-edits school-edits'>
                                <label className='edits-label' htmlFor='school'>School:</label>
                                <input className='edits-input' data-id={entry.id} type="text" name="school" value={entry.school} onChange={(e) => {handleTextChange('education', e)}} />
                            </div>
                            <div className='item-edits dates-edits'>
                                <label className='edits-label' htmlFor='dates'>Years of attendance:</label>
                                <input className='edits-input' data-id={entry.id} type='text' name='dates' value={entry.dates} onChange={(e) => {handleTextChange('education', e)}}></input>
                            </div>
                            <div className='item-edits degree-edits'>
                                <label className='edits-label' htmlFor='degree'>Degree/certification:</label>
                                <input className='edits-input' data-id={entry.id} type='text' name='degree' value={entry.degree} onChange={(e) => {handleTextChange('education', e)}}></input>
                            </div>
                            <div className='item-edits subject-edits'>
                                <label className='edits-label' htmlFor='subject'>Major/subject area:</label>
                                <input className='edits-input' data-id={entry.id} type='text' name='subject' value={entry.subject} onChange={(e) => {handleTextChange('education', e)}}></input>
                            </div>
                            <div className='item-edits additional-edits'>
                                <label className='edits-label' htmlFor='additional'>Additional information:</label>
                                <textarea className='edits-input' data-id={entry.id} name='additional' value={entry.additional} onChange={(e) => {handleTextChange('education', e)}}></textarea>
                            </div>
                            
                        </div>
                    )
                })}
                
                <Add onAddClick={addEducationEntry} section="education" />
            </div>
        )
    }

    // default (non-editing) view:
    return (
        <div className='education-section'>
            <div className='education-section-title'>
                <span className='education-title-border' style={{backgroundColor: props.accentColor}}>Education</span>
                <div className='edit-button edit-education no-print' onClick={handleEditClick}>Edit</div>
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

            <Add onAddClick={addEducationEntry} section="education" />
        </div>
    )
};

export default Education;