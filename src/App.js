// dependencies:
import React from 'react';
import uniqid from 'uniqid';

// components:
import AppTitle from './components/AppTitle';
import Education from './components/Education';
import Footer from './components/Footer';
import General from './components/General';
import Print from './components/Print';
import Work from './components/Work';

// assets:
import Headshot from './img/headshot.jpg';

// styles:
import './styles/app.css';

class App extends React.Component {
    
    constructor() {
        super();

        this.allowEdits = this.allowEdits.bind(this);
        this.createEntry = this.createEntry.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.saveEdits = this.saveEdits.bind(this);
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this);
        this.updateInformation = this.updateInformation.bind(this);

        this.state = {
            editing: '',
            general: {
                name: 'John Smith',
                email: 'johnsmith@gmail.com',
                phone: '1-234-567-8910',
                oneLiner: 'Born leader and team player with a wide-ranging yet specialized skill-set',
                location: 'Normal, IL',
                // headshot: Headshot
            },
            education: [
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
            ],
            work: [
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
            ]
        }
    }

    allowEdits(section) {
        if (section === 'education' && this.state.education.length === 0) {
            return;
        } else if (section === 'work' && this.state.work.length === 0) {
            return;
        }
        this.setState({editing: section});
    }

    createEntry(section) {
        if (section === 'education') {
            const blankEducationEntry = {
                school: '',
                dates: '',
                degree: '',
                subject: '',
                additional: '',
                id: uniqid()
            }
            const updatedEducation = [...this.state.education, blankEducationEntry];
            this.setState({education: updatedEducation});
            this.setState({editing: 'education'});
        } else if (section === 'work') {
            const blankWorkEntry = {
                company: '',
                location: '',
                title: '',
                years: '',
                description: '',
                id: uniqid()
            }
            const updatedWork = [...this.state.work, blankWorkEntry];
            this.setState({work: updatedWork});
            this.setState({editing: 'work'});
        }
    }

    saveEdits() {
        this.setState({ editing: '' });
    }

    removeItem(e) {    
        let targetSection;
        if (e.target.dataset.section === 'education') targetSection = this.state.education;
        if (e.target.dataset.section === 'work') targetSection = this.state.work;

        const targetId = e.target.dataset.id;

        let filteredEntries = targetSection.filter(entry => entry.id !== targetId);

        if (e.target.dataset.section === 'education') {
            this.setState({education: filteredEntries});
        } else if (e.target.dataset.section === 'work') {
            this.setState({work: filteredEntries});
        }

        if (filteredEntries.length === 0) this.saveEdits();
    }

    updateGeneralInfo(propertyKey, updatedValue) {
        let generalInfo = this.state.general;
        generalInfo[propertyKey] = updatedValue;
        this.setState({general: generalInfo});
    }

    updateInformation(section, entryId, propertyToUpdate, value) {
        let sectionToUpdate;
        if (section === 'general') sectionToUpdate = this.state.general;
        if (section === 'education') sectionToUpdate = this.state.education;
        if (section === 'work') sectionToUpdate = this.state.work;

        const updatedInformation = sectionToUpdate.map((entry) => {
            if (entry.id === entryId) {
                entry[propertyToUpdate] = value;
            }
            return entry;
        });
        
        this.setState({ sectionToUpdate: updatedInformation });
    }

    render() {
        // editing general info:
        if (this.state.editing === 'general') {
            return (
                <div className="wrapper">
                    <AppTitle />
                    <General 
                        editing={this.state.editing}
                        generalInfo={this.state.general}
                        onGeneralInfoChange={(property, value) => {this.updateGeneralInfo(property, value)}}
                        onSaveEditsClick={this.saveEdits}
                    />
                    <Education 
                        createEducationEntry={() => {this.createEntry('education')}}
                        educationInfo={this.state.education} 
                        onEditEducationClick={() => {this.allowEdits('education')}}
                    />
                    <Work
                        createWorkEntry={() => {this.createEntry('work')}}
                        onEditWorkClick={() => {this.allowEdits('work')}}
                        workInfo={this.state.work}
                    />
                    <Footer />
                </div>   
            )
        // editing education:
        } else if (this.state.editing === 'education') {
            return (
                <div className="wrapper">
                    <AppTitle />
                    <General 
                        editing={this.state.editing}
                        generalInfo={this.state.general}
                        onEditGeneralClick={() => {this.allowEdits('general')}}
                    />
                    <Education
                        createEducationEntry={() => {this.createEntry('education')}}
                        editing='true' 
                        educationInfo={this.state.education}
                        onDeleteClick={this.removeItem}
                        onSaveEditsClick={this.saveEdits}
                        onTextChange={this.updateInformation}
                    />
                    <Work
                        createWorkEntry={() => {this.createEntry('work')}}
                        onEditWorkClick={() => {this.allowEdits('work')}}
                        workInfo={this.state.work}
                    />
                    <Footer />
                </div>
            )
        // editing work:
        } else if (this.state.editing === 'work') {
            return (
                <div className="wrapper">
                    <AppTitle />
                    <General 
                        editing={this.state.editing}
                        generalInfo={this.state.general} 
                        onEditGeneralClick={() => {this.allowEdits('general')}}
                    />
                    <Education
                        createEducationEntry={() => {this.createEntry('education')}} 
                        educationInfo={this.state.education} 
                        onEditEducationClick={() => { this.allowEdits('education')}}
                    />
                    <Work
                        createWorkEntry={() => {this.createEntry('work')}}
                        editing='true'
                        onDeleteClick={this.removeItem}
                        onSaveEditsClick={this.saveEdits}
                        onTextChange={this.updateInformation}
                        workInfo={this.state.work}
                    />
                    <Footer />
                </div>   
            )
        // not editing:
        } else {
            return (
                <div className="wrapper">
                    <AppTitle />
                    <General 
                        editing={this.state.editing}
                        generalInfo={this.state.general}
                        onEditGeneralClick={() => {this.allowEdits('general')}} 
                    />
                    <Education
                        createEducationEntry={() => {this.createEntry('education')}} 
                        educationInfo={this.state.education} 
                        onEditEducationClick={() => {this.allowEdits('education')}}
                    />
                    <Work
                        createWorkEntry={() => {this.createEntry('work')}}
                        onEditWorkClick={() => {this.allowEdits('work')}}
                        workInfo={this.state.work}
                    />
                    <Print />
                    <Footer />
                </div>   
            )
        }
    }
}

export default App;