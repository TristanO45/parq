# Parq

Parq is a web application that allows users to create an account and either host or book parking spaces. It provides a convenient platform for connecting parking space owners with individuals in need of parking.

## Features

User Registration and Authentication: Users can create an account and securely authenticate themselves to access the platform's features.

Hosting Parking Spaces: Registered users can list their available parking spaces by providing details such as location, pricing, availability, and additional amenities.

Booking Parking Spaces: Users can search for parking spaces based on their desired location, dates, and other criteria. They can view available parking spaces, compare prices, and book the one that suits their needs.

Google Maps Integration: The application integrates with the Google Maps API to display parking space locations and provide users with an interactive map interface.

## Technologies Used

React | JavaScript | Node.js | Express.js Material-UI (Mui) | Google Maps API

## Getting Started
To run the Parq application locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/parq.git

2. Install dependencies:
cd parq
npm install

3. Obtain a Google Maps API key by creating a project on the Google Cloud Platform. Ensure that the following APIs are enabled: Maps JavaScript API, Geocoding API, and Places API.

4. Create a .env file in the root directory of the project and add the following environment variables:
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

Replace your-google-maps-api-key with your actual Google Maps API key.

5. Start the development server:
npm start

6. Open your web browser and navigate to http://localhost:3000 to access the Parq application.

## Contributing

Contributions to Parq are welcome! If you encounter any issues or would like to add new features, please open an issue or submit a pull request on the GitHub repository: https://github.com/your-username/parq

Please follow the existing code style, including linting rules, and provide appropriate test coverage for any changes.

## License
MIT License

## Acknowledgements

Parq was created as a project by:

### Laurence Diarra | Tristan Onfroy | Jake Khazi | Mike Oakes | Han Li

