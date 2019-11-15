# Credit Card Validation

The Credit Card Validation features an input field that detects credit card type and formats the input accordingly. This app is built with React and Redux libraries and utilizes [binlist api](https://binlist.net/). 

This project was created by Thomas Toan for a UserLeap coding challenge. Full requirements of the Lattice Movie Finder can be found [here](https://paper.dropbox.com/published/Problem-Credit-Card-Validation-vS5xMM0bYklNyrzZjUVZx6l).

## Test Data

The following credit card numbers can be used to trigger various credit card types: 

American Express
3714 49635 398431

Discover
6011 0009 9013 9424

Mastercard
5105 1051 0510 5100

Visa
4242 4242 4242 4242

### Installing

Install project dependencies and node modules by navigating to the project on a terminal and run 'npm install.'

```
npm install
```

After project dependencies have been installed, run 'npm start' to run the React App. By default, this App will run on http://localhost:3000. 

```
npm start
```

Once the Frontend is running, you will be able to access the Application from your local browser at http://localhost:3000/.

### Features

* User input will automatically be formatted to the format of the detected credit card type
* The App will make API calls to binlist API muliple times while as the user inputs the credit card number
* Credit card number inputs which are either too short or contain letter/special characters will result in the display of an "x" image
* Credit card number inputs which pass validation and are of the proper credit card length (per credit card type) will result in the display of a checkmark image
* API exceptions which result in a API response with status in the 400s or 500s will trigger the display of error message "Oh no! Something went wrong."

## Authors

* **Thomas Toan** - *Software Engineer* 

