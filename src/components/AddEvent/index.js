import { Component } from 'react';
import './index.css'; 

class AddEvent extends Component {
  state = {
    title: '',
    date: '',
    category: 'Social',
    description: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert('Event Added!');
  };

  render() {
    const { title, date, category, description } = this.state;

    return (
      <div className="add-event-container">
        <h2>Add New Event</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Event Title"
            required
          />
          <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
            required
          />
          <select name="category" value={category} onChange={this.handleChange} required>
            <option value="Social">Social</option>
            <option value="Religion">Religion</option>
            <option value="Charity">Charity</option>
          </select>
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Event Description"
            required
          />
          <button type="submit" className="submit-button">Add Event</button>
        </form>
      </div>
    );
  }
}

export default AddEvent;
