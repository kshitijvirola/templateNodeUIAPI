var express = require('express');
const connection = require("../src/db/conn");
const cors = require("cors");
const queryRoute = require("./image");

var app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
connection();

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.use("/image", queryRoute);

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
})
