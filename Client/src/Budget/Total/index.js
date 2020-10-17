import React, { Component } from 'react'

export class Total extends Component {
    render() {
        return (
            <div className='Total'>
                <h2>Total Budget</h2>
                <h3 className='TotalNum'>${this.props.total}</h3>
            </div>
        )
    }
}

export default Total   
