import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="header-logo">
                        <h1>EDYODA</h1>
                        <p>stories</p>
                    </div>
                    <div className="header-dropdown">
                        Explore Categories
                    </div>
                    <div className="main-btn">
                        <span>EdYoda is free learning and knowledge
                            sharing platform for techies</span>
                        <button><a target="_blank" href="https://edyoda.com">Go to Main Website </a></button>
                    </div>
                    <div>

                    </div>
                </header>
            </>
        )
    }
}
