import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';


const About = (props) => {
  return (
    <Layout>
    <div className="swoop page fadeIn">
      <div className="About page__content">
        <p className="page__title">About</p>

        <div className="About__section fadeInUp">
          <h2 className="About__title"><FontAwesomeIcon icon="globe" />website coder</h2>
          <p className="About__body">
            Self taught web developer. love of coding started with python eventually switched to web technologies. Love to stay current in trends and look forward to the future of technology.
          </p>
          <div className="Home__toolbelt">
            <p className="About__playlist-title">Tools in My Belt</p>
            <div className="Home__tools-list">
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>SCSS</li>
                <li>HTML</li>
                <li>PostCSS</li>
              </ul>

              <ul>
                <li>Gulp</li>
                <li>Heroku</li>
                <li>Github</li>
                <li>PHP</li>
              </ul>

              <ul>
                <li>Gulp</li>
                <li>Heroku</li>
                <li>Git</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="About__section fadeInUp">
          {/* possibly right aligned? */}
          <h2 className="About__title"><FontAwesomeIcon icon="music" />music hoarder</h2>
          <p className="About__body">
            I've been obsessed with music for as long as I can remember. Getting my first Walkman was a spiritual epiphany, and I've been a devout follower ever since. Around the age of 13 I started learning guitar, and it's still my favorite hobby to this day.
          </p>
          <p className="About__playlist-title">Check Out Some Playlists</p>
          <div className="About__playlist">
            <div className="About__cover">
              <FontAwesomeIcon icon="terminal" />
              <p>Coding</p>
            </div>
            <div className="About__cover">
              <FontAwesomeIcon icon="headphones" />
              <p>Rockin'</p>
            </div>
            <div className="About__cover">
              <FontAwesomeIcon icon="fire" />
              <p>Heavier Side</p>
            </div>
          </div>

        </div>

        <div className="About__section fadeInUp">
          <h2 className="About__title"><FontAwesomeIcon icon="glasses" />book skimmer</h2>
          <p className="About__body">
            During highschool I became an avid reader of everything except my textbooks. Now I enjoy science fiction, science fact, philosophy, and poetry.
          </p>

          <a href="https://www.google.com" className="About__reading-list">
            <FontAwesomeIcon icon="book" />
            <p>VALIS</p>
          </a>

          <a href="https://www.google.com" className="About__reading-list">
            <FontAwesomeIcon icon="book" />
            <p>Daniel Fights a Hurricane</p>
          </a>

          <a href="https://www.google.com" className="About__reading-list">
            <FontAwesomeIcon icon="book" />
            <p>A Man's Search for Meaning</p>
          </a>

        </div>


      </div>
    </div>
  </Layout>
    
  )
}

export default About;
