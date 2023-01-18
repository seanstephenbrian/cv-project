// dependencies:
import React from 'react';
import uniqid from 'uniqid';

// components:
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Footer from './components/Footer';

// assets:
import Headshot from './img/headshot.jpg';

// styles:
import './styles/app.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      editing: '',
      general: {
        name: 'John Smith',
        email: 'johnsmith@gmail.com',
        phone: '1-234-567-8910',
        location: 'Normal, IL',
        headshot: Headshot
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

  openEditWindow(section) {
    this.setState({editing: section});
  }

  confirmEdits() {
    alert('THIS NEEDS TO CONFIRM EDITS');
  }

  render() {

    if (this.state.editing === 'education') {
      return (
        <div className="wrapper">
          <General generalInfo={this.state.general} />
          <Education
            editing='true' 
            educationInfo={this.state.education} 
            startEditingEducation={() => {
              this.openEditWindow('education');
            }}
            saveEducationEdits={() => {
              this.confirmEdits();
            }}
          />
          <Work 
            workInfo={this.state.work}
            startEditingWork={() => {
              this.openEditWindow('work');
            }}
          />
          <Footer />
        </div>
      )
    } else if (this.state.editing === 'work') {
      return (
        <div className="wrapper">
          <General generalInfo={this.state.general} />
          <Education 
            educationInfo={this.state.education} 
            startEditingEducation={() => {
              this.openEditWindow('education');
            }}
          />
          <Work
            editing='true'
            workInfo={this.state.work}
            startEditingWork={() => {
              this.openEditWindow('work');
            }}
          />
          <Footer />
        </div>   
      )
    } else {
      return (
        <div className="wrapper">
          <General generalInfo={this.state.general} />
          <Education 
            educationInfo={this.state.education} 
            startEditingEducation={() => {
              this.openEditWindow('education');
            }}
          />
          <Work 
            workInfo={this.state.work}
            startEditingWork={() => {
              this.openEditWindow('work');
            }}
          />
          <Footer />
        </div>   
      )
    }
  }
}

export default App;