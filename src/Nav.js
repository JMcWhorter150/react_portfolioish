import React from 'react';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
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

    _toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu clicked');
        })
    }
}

export default Nav;