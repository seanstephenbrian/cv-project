import React from 'react';

import Add from './Add';

import '../styles/work.css';

class Work extends React.Component {

    constructor(props) {
        super(props);

        this.editWork = this.editWork.bind(this);
        this.handleSaveEditsClick = this.handleSaveEditsClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    editWork() {
        this.props.startEditingWork();
    }

    handleSaveEditsClick() {
        this.props.onSaveEditsClick();
    }

    handleTextChange(section, e) {
        this.props.onTextChange(section, e.target.dataset.id, e.target.name, e.target.value);
    }

    render() {
        const { workInfo, editing } = this.props;

        // editing view:
        if (editing) {
            return (
                <div className='work-section'>
                    <div className='work-section-title'>
                        <span className='work-title-border'>Work</span>
                        <div className='edit-button edit-work no-print' onClick={this.handleSaveEditsClick}>Save Edits</div>
                    </div>

                    {/* editable work entries: */}
                    {workInfo.map((entry) => {
                        return (
                            <div key={entry.id} className="editing-work-entry">
                                <div className='editing-entry-title'>
                                    Edit item:
                                </div>
                                <div className='item-edits company-edits'>
                                    <label className='edits-label' htmlFor='company'>Company:</label>
                                    <input className='edits-input' data-id={entry.id} type="text" name="company" value={entry.company} onChange={(e) => {this.handleTextChange('work', e)}} />
                                </div>
                                <div className='item-edits title-edits'>
                                    <label className='edits-label' htmlFor='title'>Position:</label>
                                    <input className='edits-input' data-id={entry.id} type="text" name="title" value={entry.title} onChange={(e) => {this.handleTextChange('work', e)}} />
                                </div>
                                <div className='item-edits location-edits'>
                                    <label className='edits-label' htmlFor='location'>Location:</label>
                                    <input className='edits-input' data-id={entry.id} type="text" name="location" value={entry.location} onChange={(e) => {this.handleTextChange('work', e)}} />
                                </div>
                                <div className='item-edits years-edits'>
                                    <label className='edits-label' htmlFor='years'>Years:</label>
                                    <input className='edits-input' data-id={entry.id} type="text" name="years" value={entry.years} onChange={(e) => {this.handleTextChange('work', e)}} />
                                </div>
                                <div className='item-edits description-edits'>
                                    <label className='edits-label' htmlFor='description'>Description:</label>
                                    <textarea className='edits-input' data-id={entry.id} name="description" value={entry.description} onChange={(e) => {this.handleTextChange('work', e)}} />
                                </div>
                            </div>
                        )
                    })}
                    <Add section="work" />
                </div>
            )
        }

        // normal view:
        return (
            <div className='work-section'>
                <div className='work-section-title'>
                    <span className='work-title-border'>Work</span>
                    <div className='edit-button edit-work no-print' onClick={this.editWork} >Edit</div>
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