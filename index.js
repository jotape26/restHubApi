// Import ExpressJS and initialize it.
let express = require('express');
let app = express();
let port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
     console.log("Running API on port " + port);
});