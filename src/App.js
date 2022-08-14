import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import Cards from './components/Cards';


import React, { Component } from 'react'
import Footer from './components/Footer';

export default class App extends Component {

  render() {
    return (
        <>
          <Header/>
          <Category/>
          <Cards/>
          <Footer/>
        </>
    
    )
  }
}


