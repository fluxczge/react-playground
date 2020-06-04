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
            homeDisp = <li><a href="#" onClick={this.homeSelect} className="selected">Home</a></li>; 
        } else {
            homeDisp = <li><a href="#" onClick={this.homeSelect}>Home</a></li>; 
        }
        if (this.state.profile) {
            profileDisp = <li><a href="#" onClick={this.profileSelect} className="selected">Profile</a></li>; 
        } else {
            profileDisp = <li><a href="#" onClick={this.profileSelect}>Profile</a></li>; 
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
