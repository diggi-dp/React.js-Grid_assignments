import React, { Component } from 'react'
import './category.css'

export default class category extends Component {
    render() {
        return (
            <>
                <div className="category-container container">
                    <h3>Latest posts</h3>

                    <div className="filter">
                        <i className="fa-solid fa-filter"></i>
                        <span>Filter by category</span>
                    </div> 

                    <div className="category-option-div">
                        <ul className="category-ul">
                            <li className="category-list"><a href="#card_container">All</a></li>
                            <li className="category-list"><a href="#card1">Web development</a></li>
                            <li className="category-list"><a href="#card2">Devops</a></li>
                            <li className="category-list"><a href="#card3">Mobile application development</a></li>
                            <li className="category-list"><a href="#card4">Technology and Tools</a></li>
                            <li className="category-list"><a href="#card5">SEO</a></li>
                            <li className="category-list"><a href="#card6">Testing</a></li>
                            <li className="category-list"><a href="#card7">Spotify</a></li>
                            <li className="category-list"><a href="#card8">Big Data Analytics</a></li>
                            <li className="category-list"><a href="#card8">More Technologies and Tools</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
