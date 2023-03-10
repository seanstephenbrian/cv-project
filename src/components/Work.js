import React, { useState } from 'react';
import uniqid from 'uniqid';

import Add from './Add';

import '../styles/work.css';

const Work = (props) => {

    const { workInfo, editing } = props;

    function addWorkEntry() {
        props.createWorkEntry();
    }    

    function handleDeleteClick(e) {
        props.onDeleteClick(e);
    }

    function handleEditClick() {
        props.onEditWorkClick();
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
            <div className='work-section'>
                <div className='work-section-title'>
                    <span className='work-title-border' style={{backgroundColor: props.accentColor}}>Work</span>
                    <div className='edit-button edit-work no-print' onClick={handleSaveEditsClick}>Save All Edits</div>
                </div>

                {/* editable work entries: */}
                {workInfo.map((entry) => {
                    return (
                        <div key={entry.id} className="editing-entry">
                            <div className='editing-entry-title'>
                                <span className='title-text'>Edit Item:</span>
                                <span className='delete-item' data-section='work' data-id={entry.id} onClick={handleDeleteClick}>Delete Item</span>
                            </div>
                            <div className='item-edits company-edits'>
                                <label className='edits-label' htmlFor='company'>Company:</label>
                                <input className='edits-input' data-id={entry.id} type="text" name="company" value={entry.company} onChange={(e) => {handleTextChange('work', e)}} />
                            </div>
                            <div className='item-edits title-edits'>
                                <label className='edits-label' htmlFor='title'>Position:</label>
                                <input className='edits-input' data-id={entry.id} type="text" name="title" value={entry.title} onChange={(e) => {handleTextChange('work', e)}} />
                            </div>
                            <div className='item-edits location-edits'>
                                <label className='edits-label' htmlFor='location'>Location:</label>
                                <input className='edits-input' data-id={entry.id} type="text" name="location" value={entry.location} onChange={(e) => {handleTextChange('work', e)}} />
                            </div>
                            <div className='item-edits years-edits'>
                                <label className='edits-label' htmlFor='years'>Years:</label>
                                <input className='edits-input' data-id={entry.id} type="text" name="years" value={entry.years} onChange={(e) => {handleTextChange('work', e)}} />
                            </div>
                            <div className='item-edits description-edits'>
                                <label className='edits-label' htmlFor='description'>Description:</label>
                                <textarea className='edits-input' data-id={entry.id} name="description" value={entry.description} onChange={(e) => {handleTextChange('work', e)}} />
                            </div>
                        </div>
                    )
                })}
                <Add onAddClick={addWorkEntry} section="work" />
            </div>
        )
    };

    // default (non-editing) view:
    return (
        <div className='work-section'>
            <div className='work-section-title'>
                <span className='work-title-border' style={{backgroundColor: props.accentColor}}>Work</span>
                <div className='edit-button edit-work no-print' onClick={handleEditClick} >Edit</div>
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
            <Add onAddClick={addWorkEntry} section="work" />
        </div>
    )
};

export default Work;