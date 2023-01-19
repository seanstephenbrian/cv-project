import React from 'react';

import Add from '../components/Add';

import '../styles/education.css';

class Education extends React.Component {

    constructor(props) {
        super(props);

        this.addEducationEntry = this.addEducationEntry.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveEditsClick = this.handleSaveEditsClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    addEducationEntry() {
        this.props.createEducationEntry();
    }

    handleDeleteClick(e) {
        this.props.onDeleteClick(e);
    }

    handleEditClick() {
        this.props.onEditEducationClick();
    }

    handleSaveEditsClick() {
        this.props.onSaveEditsClick();
    }

    handleTextChange(section, e) {
        this.props.onTextChange(section, e.target.dataset.id, e.target.name, e.target.value);
    }

    render() {
        const { educationInfo, editing } = this.props;

        // editing view:
        if (editing) {
            return (
                <div className='education-section'>
                    <div className='education-section-title'>
                        <span className='education-title-border' style={{backgroundColor: this.props.accentColor}}>Education</span>
                        <div className='edit-button edit-education no-print' onClick={this.handleSaveEditsClick}>Save All Edits</div>
                    </div>

                    {/* editable education entries: */}
                    {educationInfo.map((entry) => {
                        return (
                            <div key={entry.id} className='editing-entry'>
                                <div className='editing-entry-title'>
                                    <span className='title-text'>Edit Item:</span>
                                    <span className='delete-item' data-section='education' data-id={entry.id} onClick={this.handleDeleteClick}>Delete Item</span>
                                </div>
                                <div className='item-edits school-edits'>
                                    <label className='edits-label' htmlFor='school'>School:</label>
                                    <input className='edits-input' data-id={entry.id} type="text" name="school" value={entry.school} onChange={(e) => {this.handleTextChange('education', e)}} />
                                </div>
                                <div className='item-edits dates-edits'>
                                    <label className='edits-label' htmlFor='dates'>Years of attendance:</label>
                                    <input className='edits-input' data-id={entry.id} type='text' name='dates' value={entry.dates} onChange={(e) => {this.handleTextChange('education', e)}}></input>
                                </div>
                                <div className='item-edits degree-edits'>
                                    <label className='edits-label' htmlFor='degree'>Degree/certification:</label>
                                    <input className='edits-input' data-id={entry.id} type='text' name='degree' value={entry.degree} onChange={(e) => {this.handleTextChange('education', e)}}></input>
                                </div>
                                <div className='item-edits subject-edits'>
                                    <label className='edits-label' htmlFor='subject'>Major/subject area:</label>
                                    <input className='edits-input' data-id={entry.id} type='text' name='subject' value={entry.subject} onChange={(e) => {this.handleTextChange('education', e)}}></input>
                                </div>
                                <div className='item-edits additional-edits'>
                                    <label className='edits-label' htmlFor='additional'>Additional information:</label>
                                    <textarea className='edits-input' data-id={entry.id} name='additional' value={entry.additional} onChange={(e) => {this.handleTextChange('education', e)}}></textarea>
                                </div>
                                
                            </div>
                        )
                    })}
                    
                    <Add onAddClick={this.addEducationEntry} section="education" />

                </div>
            )
        }

        // normal view:
        return (
            <div className='education-section'>
                <div className='education-section-title'>
                    <span className='education-title-border' style={{backgroundColor: this.props.accentColor}}>Education</span>
                    <div className='edit-button edit-education no-print' onClick={this.handleEditClick}>Edit</div>
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
                <Add onAddClick={this.addEducationEntry} section="education" />
            </div>
        )
    }
}

export default Education;