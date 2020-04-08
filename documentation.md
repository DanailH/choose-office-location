# Documentation for Choose Office Location web app

This is a short documentation regarding how the `Choose Office Location` app works and some of its features. The time it took to develop this app was around 5h.

# Files and workflow

The entry file for the project is the `index.js`. In it there is a simple React router definition that loads the root `/` and catches all routes that do not match the root. If that happens the user is redirected back to the root url. This setup allows to keep the state of the app and share it easily with others.

On the root url the component that loads is the `App.js` which can be found inside the `/containers` folder. This is a smart component in a sense that this is the place where the call to fetch the data from the Openweathermap API and the Skypicker API are done. After the date for the weather forecast is fetched it is passed down to the `DestinationsList` component.

The `DestinationsList` is responsible for laying our the layout - showing 3 boxes, one for each of the predefined cities.

The `DestinationsBox` component is the one responsible for displaying both the weather forecast and the flight prices for each of the predefined destinations.

The `IATACodeInput` component is the one that handles the user input for a search result. After the user types a valid IATA code into the input and submits the form the component calls a handler with the saerch query. The handler is being passed down from the parent component to handle the flight prices search.

The calls to the Openweathermap API and the Skypicker API are abstracted into the `weatherService` and the `flightService` files in the form of a reusable functions that accepts parameters in order to fetch the need data.

Last but not least some reusable helper functions are abstracted into the `helperHooks` file.

## Decision taken
This app doesn't use state management like Redux because the complexity is not that high and this way there are fewer dependencies on which the app relies. Also I didn't used Typescript mostly for the same reason but also because with pure JS the implementation was faster. Regarding styling - the app has a basic responsive style and no CSS compiler like SASS or a library like Bootstrap was used reason being again to keep it light and simple. In addition I for the weather forecast data I choose to use the Openweathermap API because the one mentuned in the assignment didn't work for me.