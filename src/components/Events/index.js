import { Component } from 'react';
import './index.css'; 

class Events extends Component {
  render() {
    const events = [
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
    ];

    return (
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
      </div>
    );
  }
}

export default Events;
