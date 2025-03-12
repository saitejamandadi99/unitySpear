import { Component } from 'react';
import './index.css';
import Header from '../Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="AppContainer">
          {/* MainContent Section */}
          <div className="MainContent">
            <div className="ContentOverlay">
              <h1>Connecting people across faiths & interests</h1>
              <p>
                Our app is designed to help people from different backgrounds connect, share, and grow together through shared experiences, faiths, and interests.
              </p>
              <button className="exploreButton">Explore Events</button>
            </div>
          </div>

          {/* About Page Section */}
          <div className="AboutPage">
            <h2>About Us</h2>
            <p>
              Welcome to UnitySpear, where we aim to bridge gaps, create connections, and foster a community where everyone can thrive. Our platform allows people to engage, learn, and interact across faiths, cultures, and interests.
            </p>
            <ul>
              <li>Connect with like-minded people</li>
              <li>Share knowledge and experiences</li>
              <li>Join events, workshops, and community activities</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
