import React from "react";
import RList from './RList';
import SList from './SList';

import './styles.css';

class Income extends React.Component {
    constructor(props) {
        super()
        this.state = {
            recurring: [[1400, "Bunzl", 14]],
            single: [[180, "Tips", "10/12/2020"], [120, 'Tips', "09/30/2020"]]
        }
    }
    render() {
        return (
            <div className='Income scene_element scene_element--fadeinright scene_element--slideoutleft'>
                <h2>Income</h2>
                <h3>Recurring Income</h3>
                <hr />

                {this.state.recurring !== 0 ? <RList data={this.state.recurring} /> : null}
                <h3>Single Payments</h3>
                <hr />
                {this.state.single !== 0 ? <SList data={this.state.single} /> : null}
            </div>
        );
    }
}
export default Income;