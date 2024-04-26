# RocketNotes

RocketNotes is a note-taking and organization application designed to help users save important notes and links, enabling them to organize and search through them efficiently using tags and titles.

This project is part of the Rocketseat Fullstack Development Bootcamp.

## Link
Access the application [here](https://bedeschi-rocketnotes.netlify.app/).

![rocket-notes](https://github.com/bedeschiotavia/rocketnotes/assets/74593495/9e5ec8d2-f4ef-41f2-9769-809883d649a9)


## Features
- **Note and Link Management**: Easily create, edit, and delete notes and links.
- **Tagging System**: Organize your notes and links using tags for easy categorization.
- **Search Functionality**: Quickly find notes and links using titles or tags.
- **User Accounts**: Users can create their own accounts to access the application.
- **Profile Picture**: Users can upload and edit their profile picture.

## Technologies Used

### Backend
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js used to build the API.
- **SQLite**: Embedded SQL database engine used for data storage.
- **Knex.js**: SQL query builder for Node.js used for database migrations.
- **Axios**: Promise-based HTTP client for making requests to external APIs.
- **Bcrypt.js**: Library for hashing passwords.
- **Cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.js.
- **Dotenv**: Module for loading environment variables from a .env file.
- **Jsonwebtoken**: Implementation of JSON Web Tokens for authentication.
- **Multer**: Middleware for handling multipart/form-data, used for file uploads.
- **Express-async-errors**: Utility for handling asynchronous errors in Express.js.
- **PM2**: Process manager for Node.js applications used for deployment.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing library for React.
- **Styled-components**: CSS-in-JS library for styling React components.
- **React Icons**: Library providing popular icon packs as React components.
- **Axios**: HTTP client used for making requests to the backend API.

## Development and Deployment
- **Nodemon**: Development dependency for automatically restarting the server during development.
- **Vite**: Next-generation frontend tooling used for development and building the React application.
- **Eslint**: JavaScript linter for identifying and reporting patterns in code.
- **Netlify**: Platform for deploying frontend applications.
- **PM2**: Process manager for Node.js applications used for deploying the backend API.

## Getting Started
1. Clone this repository.
2. Install dependencies for both backend and frontend: npm install
3. Start the backend server: npm run dev
4. Start the frontend development server: npm run dev
5. Open your browser and navigate to the specified address to use the application.

## License
This project is licensed under the [ISC License](LICENSE).
