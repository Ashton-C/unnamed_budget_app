import React from 'react';
import './styles.css';

var RList = ({ data }) => {
    var items = data.map((entry) => {
        console.log(entry);
        return (<li key={entry.toString()} className='InListItem'>
            <span className='EAmount' >
                ${entry[0]}
            </span>
            <span className='EDesc'>
                {entry[1]}
            </span>
            <span className='EPeriod'>
                {entry[2]}
            </span>
        </li>)
    }
    );
    return (
        <ul className='RList'>
            {items}
        </ul>
    );
}
export default RList;