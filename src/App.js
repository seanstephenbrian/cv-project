// dependencies: 
import React, { useState } from 'react';
import uniqid from 'uniqid';

// components:
import AppTitle from './components/AppTitle';
import Education from './components/Education';
import Footer from './components/Footer';
import General from './components/General';
import PrintOptions from './components/Print';
import Work from './components/Work';

// styles:
import './styles/app.css';

const App = () => {
    // state declarations:
    const [editing, setEditing] = useState('');

    const [general, setGeneral] = useState([{
            name: 'John Smith',
            email: 'johnsmith@gmail.com',
            phone: '1-234-567-8910',
            oneLiner: 'Born leader and team player with a wide-ranging yet specialized skill-set',
            location: 'Normal, IL'
    }]);

    const [education, setEducation] = useState([
        {
            school: 'University of Illinois',
            dates: '2012-2016',
            degree: 'BA',
            subject: 'English',
            additional: `Phi Beta Kappa; Dean's List, 2014-2016`,
            id: uniqid()
        },
        {
            school: 'Normal High School',
            dates: '2008-2012',
            degree: 'High school diploma',
            subject: '',
            additional: `National Merit Scholar`,
            id: uniqid()
        }
    ]);

    const [work, setWork] = useState([
        {
            company: `Another Company`,
            location: 'Milwaukee, WI',
            title: 'Senior Copywriter',
            years: '2019-present',
            description: 'Oversaw major advertising campaigns',
            id: uniqid()
        },
        {
            company: `McDonald's (Corporate)`,
            location: 'Chicago, IL',
            title: 'Junior Copywriter',
            years: '2016-2018',
            description: 'Produced copy for national and international advertising campaigns',
            id: uniqid()
        }   
    ]);

    const [accent, setAccent] = useState('#FFBEAD');

    const [font, setFont] = useState('Open Sans');

    const [fontClass, setFontClass] = useState('opensans');

    // methods:
    function allowEdits(section) {
        if (section === 'education' && education.length === 0) {
            return;
        } else if (section === 'work' && work.length === 0) {
            return;
        }
        setEditing(section);
    }

    function changeAccentColor(newColor) {
        setAccent(newColor);
    }

    function changeFont(fontChoice) {
        setFont(fontChoice);
        const className = fontChoice.replace(/\s+/g, '').toLowerCase();
        setFontClass(className);
    }

    function createEntry(section) {
        if (section === 'education') {
            const blankEducationEntry = {
                school: '',
                dates: '',
                degree: '',
                subject: '',
                additional: '',
                id: uniqid()
            };
            setEducation([...education, blankEducationEntry]);
            setEditing('education');
        } else if (section === 'work') {
            const blankWorkEntry = {
                company: '',
                location: '',
                title: '',
                years: '',
                description: '',
                id: uniqid()
            };
            setWork([...work, blankWorkEntry]);
            setEditing('work');     
        }
    }

    function saveEdits() {
        setEditing('');
    }

    function removeItem(e) {
        let targetSection;
        if (e.target.dataset.section === 'education') targetSection = education;
        if (e.target.dataset.section === 'work') targetSection = work;

        const targetId = e.target.dataset.id;

        const filteredEntries = targetSection.filter(entry => entry.id !== targetId);

        if (e.target.dataset.section === 'education') {
            setEducation(filteredEntries);
        } else if (e.target.dataset.section === 'work') {
            setWork(filteredEntries);
        }

        if (filteredEntries.length === 0) saveEdits();
    }

    function updateGeneralInfo(propertyKey, updatedValue) {
        let generalInfo = general[0];
        generalInfo[propertyKey] = updatedValue;
        setGeneral([generalInfo]);
    }

    function updateInformation(section, entryId, propertyToUpdate, value) {
        let sectionToUpdate;
        if (section === 'general') {
            sectionToUpdate = general;
            const updatedGeneral = sectionToUpdate.map((entry) => {
                if (entry.id === entryId) {
                    entry[propertyToUpdate] = value;
                }
                return entry;
            });
            setGeneral(updatedGeneral);
        } else if (section === 'education') {
            sectionToUpdate = education;
            const updatedEducation = sectionToUpdate.map((entry) => {
                if (entry.id === entryId) {
                    entry[propertyToUpdate] = value;
                }
                return entry;
            });
            setEducation(updatedEducation);
        } else if (section === 'work') {
            sectionToUpdate = work;
            const updatedWork = sectionToUpdate.map((entry) => {
                if (entry.id === entryId) {
                    entry[propertyToUpdate] = value;
                }
                return entry;
            });
            setWork([updatedWork]);
        }
    }

    // render logic:

    // editing general info:
    if (editing === 'general') {
        return (
            <div className="wrapper" style={{fontFamily: font}}>
                <AppTitle />
                <General
                    accentColor={accent} 
                    editing={editing}
                    generalInfo={general[0]}
                    onGeneralInfoChange={(property, value) => {updateGeneralInfo(property, value)}}
                    onSaveEditsClick={saveEdits}
                />
                <Education
                    accentColor={accent} 
                    createEducationEntry={() => {createEntry('education')}}
                    educationInfo={education} 
                    onEditEducationClick={() => {allowEdits('education')}}
                />
                <Work
                    accentColor={accent}
                    createWorkEntry={() => {createEntry('work')}}
                    onEditWorkClick={() => {allowEdits('work')}}
                    workInfo={work}
                />
                <PrintOptions 
                    accentColor={accent} 
                    onColorChange={changeAccentColor} 
                    onFontClick={changeFont} 
                    selectedFont={fontClass} 
                />
                <Footer />
            </div>   
        )
    // editing education:
    } else if (editing === 'education') {
        return (
            <div className="wrapper" style={{fontFamily: font}}>
                <AppTitle />
                <General
                    accentColor={accent} 
                    editing={editing}
                    generalInfo={general[0]}
                    onEditGeneralClick={() => {allowEdits('general')}}
                />
                <Education
                    accentColor={accent}
                    createEducationEntry={() => {createEntry('education')}}
                    editing='true' 
                    educationInfo={education}
                    onDeleteClick={removeItem}
                    onSaveEditsClick={saveEdits}
                    onTextChange={updateInformation}
                />
                <Work
                    accentColor={accent}
                    createWorkEntry={() => {createEntry('work')}}
                    onEditWorkClick={() => {allowEdits('work')}}
                    workInfo={work}
                />
                <PrintOptions 
                    accentColor={accent} 
                    onColorChange={changeAccentColor} 
                    onFontClick={changeFont} 
                    selectedFont={fontClass} 
                />
                <Footer />
            </div>
        )
    // editing work:
    } else if (editing === 'work') {
        return (
            <div className="wrapper" style={{fontFamily: font}}>
                <AppTitle />
                <General
                    accentColor={accent} 
                    editing={editing}
                    generalInfo={general[0]}
                    onEditGeneralClick={() => {allowEdits('general')}}
                />
                <Education
                    accentColor={accent}
                    createEducationEntry={() => {createEntry('education')}} 
                    educationInfo={education} 
                    onEditEducationClick={() => { allowEdits('education')}}
                />
                <Work
                    accentColor={accent}
                    createWorkEntry={() => {createEntry('work')}}
                    editing='true'
                    onDeleteClick={removeItem}
                    onSaveEditsClick={saveEdits}
                    onTextChange={updateInformation}
                    workInfo={work}
                />
                <PrintOptions 
                    accentColor={accent} 
                    onColorChange={changeAccentColor} 
                    onFontClick={changeFont} 
                    selectedFont={fontClass} 
                />
                <Footer />
            </div>   
        )
    // not editing:
    } else {
        return (
            <div className="wrapper" style={{fontFamily: font}}>
                <AppTitle />
                <General
                    accentColor={accent} 
                    editing={editing}
                    generalInfo={general[0]}
                    onEditGeneralClick={() => {allowEdits('general')}} 
                />
                <Education
                    accentColor={accent}
                    createEducationEntry={() => {createEntry('education')}} 
                    educationInfo={education} 
                    onEditEducationClick={() => {allowEdits('education')}}
                />
                <Work
                    accentColor={accent}
                    createWorkEntry={() => {createEntry('work')}}
                    onEditWorkClick={() => {allowEdits('work')}}
                    workInfo={work}
                />
                <PrintOptions 
                    accentColor={accent} 
                    onColorChange={changeAccentColor} 
                    onFontClick={changeFont} 
                    selectedFont={fontClass} 
                />
                <Footer />
            </div>   
        )
    }
}

export default App;