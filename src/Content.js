import React, { Component } from 'react'
import Feed from './content/Feed'

export class Content extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            content1: 1,
            content2: 2
        }

        this.method1 = this.method1.bind(this);
    }

    method1 = (event) => {
        let stateTemp = this.state;
        stateTemp.content1 += parseInt(event);
        stateTemp.content2 += parseInt(event);
        this.setState(stateTemp);
    }

    render() {
        return (
            <div>
                <Feed detail1={this.state.content1} detail2={this.state.content2} clickFeed={this.method1}/>
            </div>
        )
    }
}

export default Content
