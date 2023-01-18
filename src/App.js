import React from 'react';

import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Add from './components/Add';

class App extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <General />
            <Education />
            <Add />
            <Work />
            <Add />
          </div>    
        )
    }
}

export default App;