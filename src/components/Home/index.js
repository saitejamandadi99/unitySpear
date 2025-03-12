import { Component } from 'react';
import { Link } from 'react-router-dom';  
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
              
              <Link to="/events">
                <button className="exploreButton">Explore Events</button>
              </Link>
            </div>
          </div>

          {/* About Page Section */}
          <div className="AboutPage">
            <h2>About UnitySpear</h2>
            <p>
              At UnitySpear, we believe in building stronger connections across faiths, cultures, and interests. Our platform brings together people from diverse backgrounds, enabling them to engage, learn, and grow through shared experiences and events.
            </p>

            <div className="cardsContainer">
              <div className="card">
                <h3>Importance of Community</h3>
                <p>
                  Communities provide support, foster connection, and create a sense of belonging. At UnitySpear, we believe that through shared experiences, people can bridge gaps and create long-lasting relationships.
                </p>
              </div>

              <div className="card">
                <h3>Social Events</h3>
                <p>
                  Our social events are designed to bring people together for fun and connection. Whether it’s a meetup, a party, or a networking event, UnitySpear provides opportunities for people to expand their social circles.
                </p>
              </div>

              <div className="card">
                <h3>Religious Events</h3>
                <p>
                  We offer events that allow individuals from different religious backgrounds to come together, share their beliefs, and learn from one another. UnitySpear promotes respect, understanding, and peaceful dialogue.
                </p>
              </div>

              <div className="card">
                <h3>Charity Events</h3>
                <p>
                  Giving back to the community is a core value at UnitySpear. Our charity events aim to support those in need, whether through food drives, fundraisers, or volunteering opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
