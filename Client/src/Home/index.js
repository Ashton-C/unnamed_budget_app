import React from 'react';

import Budget from '../Budget';
import Income from "../Income";

import './styles.css';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentPage: 'home'
        }

    }

    render() {
        return (
            <div className='Home'>
                <Budget user={this.props.userName} />
            </div>
        )
    }
}
export default Home;