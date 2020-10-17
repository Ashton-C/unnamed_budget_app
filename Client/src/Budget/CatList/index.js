import React from 'react';
import CatAdd from '../CatAdd';
import CatDisp from '../CatDisp';
import CatEdit from '../CatEdit';

class CatList extends React.Component {
    constructor(props) {
        super();
    }


    render() {
        var cats = this.props.catdata.map((cat) => {
            console.log(cat);
            return (
                <li key={cat.name.toString()} className='Catagory'>
                    <span className='CatName'>{cat.name}</span>
                    {/* vvv needs calculation from expenses vvv */}
                    <span className='CatUsage'>{cat.amount}</span>
                </li>
            );
        });
        return (<div className='CatList'>{cats}</div>);
    }
}
export default CatList;