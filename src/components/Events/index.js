import { Component } from 'react';
import './index.css';
import Header from '../Header';
import AddEvent from '../AddEvent';

class Events extends Component {
  state = {
    events: [
      {
        title: 'Charity Drive',
        date: '2025-05-01',
        location: 'New York City',
        description: 'Join us for a charity drive to support the homeless.',
        category: 'Charity',
      },
      {
        title: 'Religious Gathering',
        date: '2025-04-15',
        location: 'Los Angeles',
        description: 'A peaceful gathering to discuss faith and spirituality.',
        category: 'Religion',
      },
      {
        title: 'Social Meetup',
        date: '2025-06-20',
        location: 'San Francisco',
        description: 'A social event to meet and interact with new people.',
        category: 'Social',
      },
      {
        title: 'Yoga Retreat',
        date: '2025-07-10',
        location: 'Miami',
        description: 'A relaxing yoga retreat to rejuvenate your mind and body.',
        category: 'Social',
      },
      {
        title: 'Religious Conference',
        date: '2025-08-25',
        location: 'Chicago',
        description: 'A conference to explore various religious perspectives.',
        category: 'Religion',
      },
      {
        title: 'Charity Walk',
        date: '2025-09-05',
        location: 'Austin',
        description: 'A community walk to raise funds for cancer research.',
        category: 'Charity',
      },
    ],
  };

  addEvent = (newEvent) => {
    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
    }));
  };

  render() {
    const { events } = this.state;

    return (
      <>
        <Header />
        <div className="events-container">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {events.map((event, index) => (
              <div className="event-card" key={index}>
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Category:</strong> {event.category}</p>
              </div>
            ))}
          </div>
          <button className="exploreButton">Explore More Events</button>
        </div>
        <AddEvent addEvent={this.addEvent} />
      </>
    );
  }
}

export default Events;
