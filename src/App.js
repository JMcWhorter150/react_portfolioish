import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nav from './Nav';
import Blog from './Blog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const websiteCopy = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quibusdam incidunt est at dignissimos similique doloremque velit rerum? Odit, fugiat possimus quos consequatur adipisci cupiditate deleniti quod voluptates cumque quaerat.";

const tagCopy = "Amazing Web Developer";

// const linkNames = ['Home', 'Portfolio', 'Contact'];

const linkNames = [{
  text:'Home',
  path: '/'
},
{
  text: 'Blog',
  path: '/blog'
}]

function App() {
  return (
    <Router>
      <Header headTag={tagCopy} />
      <Nav linkNames={linkNames} />

      <Switch>
        <Route path="/blog/:blogId">
          <Blog />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

function Home() {
  return <h1>You are home</h1>;
}

// function Blog() {
//   return <h1>You are on the blog!</h1>;
// }

function BlogList() {
  return <p>This is the blog list</p>;
}

export default App;
/*
      <div className="container-fluid">
        <Header headTag={tagCopy} />
        <Nav linkNames={linkNames} />
        <Main content={websiteCopy} />
        <Footer />
      </div>
*/