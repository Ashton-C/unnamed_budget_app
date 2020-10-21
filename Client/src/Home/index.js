import React from 'react';

import Budget from '../Budget';
import Income from "../Income";
import Transactions from '../Transactions'
import NavBar from '../NavBar';

import './styles.css';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            activePage: 'Transactions'
        }
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick = (navValue) => {
        this.setState({
            activePage: navValue
        });
    }

    render() {
        return (
            <div className='Home'>
                {
                    {
                        'Transactions': <Transactions user={this.props.user} />,
                        'Budget': <Budget userData={this.props.user} />,
                        'Income': <Income userData={this.props.user} />
                    }
                    [this.state.activePage]
                }
                <NavBar onNavChange={this.handleNavClick} activePage={this.state.activePage} />
            </div>
        )
    }
}
export default Home;