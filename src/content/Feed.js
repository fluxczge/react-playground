import React, { Component } from 'react'

export class Feed extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '0'
        }

        this.updateField = this.updateField.bind(this);
    }

    toggleShow = () => {
        this.props.clickFeed(this.state.name);
    };

    updateField = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                Feed<br />
                {this.props.detail1}<br />
                {this.props.detail2}<br />
                <input type="text" value={this.state.name} onChange={this.updateField}/><br />
                <button onClick={this.toggleShow}>Toggle Show</button>
            </div>
        )
    }
}

export default Feed
