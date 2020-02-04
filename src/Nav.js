import React from 'react';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

        // if you need something to run fast do the following
        // this._toggleMenu = this._toggleMenu.bind(this);
    }
    render() {
        return (
        this.state.isOpen ? 
        <>
            <a onClick={this._toggleMenu}>🥞</a>
            <ul id='nav'>
            {this.props.linkNames.map((link, i) => {
            return (<li key={i}><a href={`#${link}`}>{link}</a></li>)
            })}
            </ul>
        </>
        :
        <a onClick={this._toggleMenu}>🍔</a>
        )
    }

    // arrow function variable never ever loses the value of 'this' keyword
    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu clicked');
        })
    }
}

export default Nav;