# Node Two

In this lecture we talk about Top Level Middleware, Using Postman, and using Axios in our API.

## Top Level Middleware

`Top Level Middleware` is the term we use to refer to some logic that will be executed upon every request that is made to our API.

We can set up that logic inside of the built method `.use()` that comes from the object that is return from invoking `express`.

```javascript
app.use(/* some function to execute here */);
```

## Req Body

Sometimes we need to send some complex data to our API. Using the `req.query` or `req.params` just might not be suffuciant enough to use to send this data. This is where the `body` comes into play.

`req.body` is the object we can use to receive the complex data. However, the data that comes from the body of the request is received as `JSON` so we need to parse it into a Javascript Object.

We can do this by using a special function from `express` called `express.json()`. This function will parse the JSON that comes as the `body` from the request and turn it into a useable object for us.

We want to invoke this function as `Top Level Middleware` so that it is invoked upon every connection made to our API.

We will pass it into our `app.use()` function to run it as top level middleware.

```javascript
app.use(express.json());
```

## CORS

CORS stands for `Cross Origin Resource Sharing`. This is a security protocol that we can use to safely allow other origins talk to our origin. This means that we can make a request from one server to another server.

We first need to install `CORS` as a dependency for our project. In the terminal, run:

```bash
$ npm install cors
```

Then require it at the top of the `index.js` file for our API.

```javascript
const cors = require('cors`)
```

Then we need this function to be invoked as top level middleware.

```javascript
app.use(cors())
```

Now your API is setup to follow the `CORS` protocol.

## Postman

`Postman` is a suite that we can use to act as a `client` to interact with the `API` that we build.