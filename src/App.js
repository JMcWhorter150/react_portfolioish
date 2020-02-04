import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nav from './Nav';

const websiteCopy = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quibusdam incidunt est at dignissimos similique doloremque velit rerum? Odit, fugiat possimus quos consequatur adipisci cupiditate deleniti quod voluptates cumque quaerat.";

const tagCopy = "Amazing Web Developer";

const linkNames = ['Home', 'Portfolio', 'Contact'];

function App() {
  return (
    <div className="container-fluid">
      <Header headTag={tagCopy} />
      <Nav linkNames={linkNames} />
      <Main content={websiteCopy} />
      <Footer />
    </div>
  );
}

export default App;
