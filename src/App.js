import React from 'react';

import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Add from './components/Add';

import Headshot from './img/headshot.jpg';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
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
          additional: `Phi Beta Kappa; Dean's List, 2014-2016`
        }
      ],
      work: [
        {
          company: `McDonald's (Corporate)`,
          location: 'Chicago, IL',
          title: 'Junior Copywriter',
          years: '2016-2018',
          description: 'Produced copy for national and international advertising campaigns'
        }
      ]
    }
  }

  render() {
      return (
        <div className="wrapper">
          <General generalInfo={this.state.general} />
          <Education educationInfo={this.state.education} />
          <Add />
          <Work workInfo={this.state.work} />
          <Add />
        </div>    
      )
  }
}

export default App;