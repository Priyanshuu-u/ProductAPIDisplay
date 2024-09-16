# Product Display App

This is a simple web application that fetches 30 products from the [Dummy JSON Products API](https://dummyjson.com/products) and displays them one by one on the frontend. The user can click a button to show the next product.

## Features

- Fetches product data (title, description, price, and image) from an external API.
- Displays products one by one on the frontend.
- Shows a loading message while fetching the products.
- Error handling in case the API request fails.
- Button to load and display the next product.

## Technologies Used

- **HTML**: For the structure of the webpage.
- **CSS**: Basic styling for product display.
- **JavaScript (ES6)**: For fetching data from the API and dynamically updating the DOM.
- **Axios**: Used for making asynchronous HTTP requests.

## How It Works

1. The app initially fetches product data from the Dummy JSON API.
2. It displays the first product (with title, description, price, and thumbnail image).
3. Users can click the "Next" button to display the next product in the list.
4. If all products are shown, a message will indicate that there are no more products to display.
5. Error handling is included to notify users if there's an issue fetching the product data.

## Installation & Usage

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/product-display-app.git
    ```

2. Open `index.html` in a web browser.

3. Products will automatically start loading from the API on page load.

4. Click the "Next" button to navigate through the products.

## Code Overview

- **getproduct()**: Fetches product data from the API and handles loading state.
- **showNextProduct()**: Updates the DOM with the next product's details.
- **setLoadingText()**: Displays a loading message while data is being fetched.
- **setErrorText()**: Displays an error message in case of a failed request.

## API Reference

This project uses the [Dummy JSON Products API](https://dummyjson.com/products) to fetch product data. The data includes:

- Product title
- Description
- Price
- Thumbnail image

Thank you for taking your time and reading this!
