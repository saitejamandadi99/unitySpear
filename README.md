

---

# UnitySpear

UnitySpear is a web application designed to connect people from different backgrounds across faiths, cultures, and interests. The app allows users to discover, create, and join community events related to social gatherings, religious meetups, and charity drives. It provides an interactive platform where users can learn, share, and grow together in a community.

## Features

- **Home Page**: Displays a welcoming message and allows users to explore events.
- **Events Page**: Lists upcoming events with details such as title, date, location, and description. Users can add new events, which will be displayed on the page after they are submitted.
- **Event Categories**: Users can browse events categorized into Social, Religious, and Charity.
- **Event Creation**: Users can add new events with the title, date, category, and description. Events will be shown immediately after submission.
- **Responsive Design**: The app is designed to work on all screen sizes without the need for media queries, using relative units (like rem, %, vh, and vw) and flexible layouts (flexbox and grid).

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **CSS**: Styling and layout using Flexbox and Grid.
- **React Router DOM**: For page navigation.
  
## Setup

### Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: You can download it from [nodejs.org](https://nodejs.org).
- **npm**: This comes bundled with Node.js.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/unityspear.git
   ```

2. Navigate to the project directory:
   ```bash
   cd unityspear
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## File Structure

```
src/
  ├── components/
  │   ├── Header/
  │   ├── Home/
  │   ├── Events/
  │   ├── AddEvent/
  ├── App.js
  ├── index.js
  ├── index.css
```

- **components/**: Contains all React components (Header, Home, Events, AddEvent).
- **App.js**: Main app file where routing is managed.
- **index.js**: Entry point of the app.
- **index.css**: Global CSS styles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This version of the README has removed both the local storage and contributing sections, providing a simplified guide to setting up the app and understanding its features.
