import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import generalNews from './NewsRoom/General.json';
import businessNews from './NewsRoom/Business.json';
import entertainmentNews from './NewsRoom/Entertainment.json';
import healthNews from './NewsRoom/Health.json';
import scienceNews from './NewsRoom/Science.json';
import sportsNews from './NewsRoom/Sports.json';
import technologyNews from './NewsRoom/Technology.json';


export default class App extends Component {
  state = {
    progress: 10
  }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  render() {
    return (
    <BrowserRouter>
    <Navbar/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
        <Route 
          exact path='/react-daily-news/' 
          element={<News setProgress={this.setProgress} 
          newsData={generalNews.articles} 
          key="general" 
          category="general"/>} 
        />
        <Route 
          exact path='/react-daily-news/business' 
          element={<News setProgress={this.setProgress} 
          newsData={businessNews.articles} 
          key="business"  
          category="business"/>} 
        />
        <Route 
          exact path='/react-daily-news/entertainment' 
          element={<News setProgress={this.setProgress} 
          newsData={entertainmentNews.articles} 
          key="entertainment" 
          category="entertainment"/>} 
        />
        <Route 
          exact path='/react-daily-news/health' 
          element={<News setProgress={this.setProgress} 
          newsData={healthNews.articles} 
          key="health" 
          category="health"/>} 
        />
        <Route 
          exact path='/react-daily-news/science' 
          element={<News setProgress={this.setProgress} 
          newsData={scienceNews.articles} 
          key="science" 
          category="science"/>} 
        />
        <Route 
          exact path='/react-daily-news/sports' 
          element={<News setProgress={this.setProgress} 
          newsData={sportsNews.articles} 
          key="sports" 
          category="sports"/>} 
        />
        <Route 
          exact path='/react-daily-news/technology' 
          element={<News setProgress={this.setProgress} 
          newsData={technologyNews.articles} 
          key="technology" 
          category="technology"/>} 
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
    )
  }
}

