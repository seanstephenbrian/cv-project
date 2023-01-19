import React from 'react';

import AddIcon from '../img/add.svg';

import '../styles/add.css';

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleAddClick() {
        this.props.onAddClick();
    }

    render() {
        const { section } = this.props;
        const addClasses = `no-print icon-wrapper add-${section}`;
        return (
            <div className={addClasses}>
                <img onClick={this.handleAddClick} className='add-img' src={AddIcon} alt='Add'></img>
            </div>
        )
    }
}

export default Add;