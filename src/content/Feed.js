import React, { Component } from 'react'

export class Feed extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '0',
            feedList: []
        }

        this.updateField = this.updateField.bind(this);
    }


    componentDidMount() {
        fetch('http://localhost:8080/feed')
        .then(res => res.json())
        .then((data) => {
            this.setState({feedList: data})
        }).catch(console.log);
    }

    toggleShow = () => {
        this.props.clickFeed(this.state.name);
    };

    updateField = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        let feedDisp = [];
        this.state.feedList.forEach((data, index) => {
            feedDisp.push(<h3 key={'h'+index}>{data.name}</h3>)
            feedDisp.push(<p key={'p'+index}>{data.comment}</p>)
            feedDisp.push(<i key={'i'+index}>{data.date}</i>)
        });

        return (
            <div>
                Feed<br />
                {this.props.detail1}<br />
                {this.props.detail2}<br />
                <input type="text" value={this.state.name} onChange={this.updateField}/><br />
                <button onClick={this.toggleShow}>Toggle Show</button>

                <div>
                    {feedDisp}
                </div>
            </div>
        )
    }
}

export default Feed
