import React from 'react';
import './App.css';
import logo from './assets/facebook-1.png';

import Header from './components/Header';
import PostList from './components/PostList';

function App(){
  return (
   <>
     <Header />
     <PostList />
  </>
  );
}

export default App;