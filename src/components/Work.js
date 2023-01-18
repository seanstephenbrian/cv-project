import React from 'react';

import Add from './Add';

class Work extends React.Component {
    render() {
        const { workInfo } = this.props;
        return (
            <div className='work-section'>
                {workInfo.map((entry) => {
                    return (
                        <div className="job-entry" key={entry.id}>
                            <h1>{entry.company}</h1>
                            <h3>{entry.location}</h3>
                            <h2>{entry.title}</h2>
                            <h3>{entry.years}</h3>
                            <p>{entry.description}</p>
                        </div>
                    )
                })}
                <Add section="work" />
            </div>
        )
    }
}

export default Work;