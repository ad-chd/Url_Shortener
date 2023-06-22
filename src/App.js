import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import InputShortener from './components/InputShortener';
import Background from './components/Background';
import LinkResult from './components/LinkResult';
import LogsPage from './components/LogsPage';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);

  const deleteLink = (index) => {
    const updatedLinks = [...shortenedLinks];
    updatedLinks.splice(index, 1);
    setShortenedLinks(updatedLinks);
  };

  const handleClick = async (index, urlCode) => {
    try {
      const response = await fetch(`/api/url/${urlCode}/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const updatedLinks = [...shortenedLinks];
        updatedLinks[index].visits = updatedLinks[index].visits + 1 || 1;
        setShortenedLinks(updatedLinks);
      }
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  useEffect(() => {
    const button = document.querySelector('.container button');

    const handleClick = () => {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 500);
    };

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    if (inputValue.length > 0) {
      setShortenedLinks((prevLinks) => [
        ...prevLinks,
        { originalUrl: inputValue, shortenedUrl: "", visits: 0 }
      ]);
    }
  }, [inputValue]);

  return (
    <Router>
      <div className=''>
        <Background />
        <div className='container'>
          <InputShortener setInputValue={setInputValue} />
          <LinkResult
            inputValue={inputValue}
            setShortenedLinks={setShortenedLinks}
            shortenedLinks={shortenedLinks}
          />
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/logs'>Logs</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<div></div>} />
            <Route
              path='/logs'
              element={<LogsPage shortenedLinks={shortenedLinks} deleteLink={deleteLink} handleClick={handleClick} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
