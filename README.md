# Getting Started with Vite + React + Vitest
This template is a starting point for using [Vite](https://vitejs.dev/) with [React](https://reactjs.org/).


## Install and running the project

Installing and running the project is as simple as running

```sh
yarn && yarn dev
```

- Note that we recommend using yarn.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### `yarn  lint`

Runs the linter to check for any errors in the code.

## More information

## Structure
<pre>  
├───.github     <i>// Github actions config files </i>
├───public
├───context
├───index.css
└───src	
    ├───components
    |        ├───header
    |        ├───productItem
    |        └───searchInput
    ├───pages
    |       ├───HomePage
    |       └───ProductPage           
    | 
    ├───tests   
    | 
    └─--helpers <i> // Helper functions call API </i>
</pre>


## context

Use the context to reload the number of  items  when user add item to cart
