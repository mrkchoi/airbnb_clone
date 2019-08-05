# Aerbnb
### [View the live site](https://aerbnb.herokuapp.com/#/)
Aerbnb is a single-page, full stack web application inspired by Airbnb. It utilizes Ruby on Rails with a PostgreSQL database on the back-end, and React.js and Redux on the front-end. 
* Users can view, book, and search for listings by location.

### Screenshots

![AirBnB clone screenshot Kenneth Choi](https://raw.githubusercontent.com/mrkchoi/WHR_data_visualization/master/dist/assets/screenshots/aerbnb_screenshot.gif)
### Key Features
#### [Aerbnb Design Documents](https://github.com/mrkchoi/airbnb_clone/wiki)

#### User Authentication
* Users can sign up or log in to use the application.
* Users can also log in through a demo account.
#### Listings
* Listings are displayed on the homepage.
* Users are able to search for listings via Google Maps Places API.
#### Bookings
* A logged in user is able to view his or her bookings.
* A logged in user is able to make valid bookings on listings and delete any booking he or she made.
#### Technology Stack
Aerbnb is a single-page web application with one backend route responsible for rendering HTML. User interactions in the front-end side trigger AJAX requests to the back-end, which is responsible for rendering database information in JSON format.

### Front-end
#### React
The response information is taken by the React JS library to update the page.

* One of the ways React is a useful tool for front-end development is creating a virtual DOM to make DOM manipulation efficient.
#### Redux
Redux manages the front-end state of Heirbnb. When database information is retrieved, Redux state is updated first and re-renders the appropriate React components.

### Back-end
#### Ruby on Rails
Ruby on Rails is the back-end framework used to query the database. Read more

#### Database
Aerbnb uses a PostgreSQL database to store its relational data.

#### Future Plans
* Implement ability for users to upload profile pictures and edit profile page
* Infinite scrolling or pagination on the index pages
* Implement ability to interact with friends, i.e. messaging
* Additional filters for listings
