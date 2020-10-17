import React from 'react';
import './styles.css';

var SList = ({ data }) => {
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
        <ul className='SList'>
            {items}
        </ul>
    );
}
export default SList;