import React, { Component } from 'react';
import './header.css';

export class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            home: false,
            profile: false
        }

        this.homeSelect = this.homeSelect.bind(this);
        this.profileSelect = this.profileSelect.bind(this);
    }

    homeSelect = () => {
        this.setState({home: true, profile: false});
    }

    profileSelect = () => {
        this.setState({home: false, profile: true});
    }
    
    render() {
        let homeDisp;
        let profileDisp;
        if (this.state.home) {
            homeDisp = <li><button onClick={this.homeSelect} className="selected">Home</button></li>; 
        } else {
            homeDisp = <li><button onClick={this.homeSelect}>Home</button></li>; 
        }
        if (this.state.profile) {
            profileDisp = <li><button onClick={this.profileSelect} className="selected">Profile</button></li>; 
        } else {
            profileDisp = <li><button onClick={this.profileSelect}>Profile</button></li>; 
        }
        return (
            <div className="header">
                <ul>
                    {homeDisp}
                    {profileDisp}
                </ul>
            </div>
        )
    }
}

export default Header
