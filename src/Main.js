import React, { Component } from 'react'
import Content from './Content'
import Header from './Header'
import Profile from './Profile'

export class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            page: 'content'
        }

        this.loadPage = this.loadPage.bind(this);
    }

    loadPage = (event) => {
        this.setState({page: event});
    }
    
    render() {
        let pageLoaded;
        if (this.state.page === "content") {
            pageLoaded = <Content />
        } else if (this.state.page === "profile") {
            pageLoaded = <Profile />
        }

        return (
            <div>
                <Header clickPage={this.loadPage}/>
                {pageLoaded}
            </div>
        )
    }
}

export default Main
