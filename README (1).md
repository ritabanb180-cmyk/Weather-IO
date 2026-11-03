# Weather IO
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ritabanb180-cmyk/Weather-IO)

A simple and clean web application to fetch and display the current weather for any city in the world. This project uses the OpenWeatherMap API to retrieve real-time weather data.

## Features
- **City Search**: Enter the name of any city to get its latest weather information.
- **Dynamic Weather Display**: Shows the city name, temperature in Celsius, humidity, a brief weather description, and a corresponding emoji.
- **Clean UI**: A minimalist card-based design that updates with the weather data.
- **Error Handling**: Displays a user-friendly message if the city is not found or if the input is empty.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)

## API
This project utilizes the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ritabanb180-cmyk/weather-io.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd weather-io
    ```

3.  **Get an API Key:**
    - Go to the [OpenWeatherMap](https://openweathermap.org/) website and sign up for a free account.
    - Navigate to the 'API keys' tab on your account page to find your unique API key.

4.  **Add the API Key to the project:**
    - Open the `weather.js` file.
    - Find the `apiKey` constant on line 4.
    - Replace the existing string with your own API key.
    ```javascript
    const apiKey = "YOUR_API_KEY_HERE";
    ```

5.  **Open the application:**
    - Open the `index.html` file in your web browser.

## How to Use
1.  Launch the application by opening `index.html`.
2.  Type the name of a city into the "Search City" input field.
3.  Click the "Go" button or press Enter.
4.  The weather details for the specified city will appear on a card below the search bar.