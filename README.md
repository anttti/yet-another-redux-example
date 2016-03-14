# Yet Another Redux example

A simple, yet comprehensive React + Redux application, complete with DevTools.

Based on [simple-redux-boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate) by [@tsaiDavid](https://github.com/tsaiDavid/).

***

### Usage

Install required dependencies:
```
npm install
```

Run development server, complete with DevTools and related configuration:
```
npm start
```

You're now ready to get working! *(enter command or visit via browser directly)*
```
open http://localhost:3000/
```

Now that your development server is up and running, you will see that you have your Redux DevTools available for you to use. The keyboard shortcuts available follow the generally accepted config - but you're free to make changes to them here: `containers/DevTools.js`.

***To toggle the DevTool panel during development:***
<kbd>CTRL</kbd> + <kbd>H</kbd>

***Change the DevTool panel's position during development:***
<kbd>CTRL</kbd> + <kbd>Q</kbd>

Run tests:
```
npm run test
```

### Server

There's no server in this repo. To run a quick mock server with the data this app expects, install [json-server](https://github.com/typicode/json-server) and run it:

```
json-server --watch db.json --port 3002
```
