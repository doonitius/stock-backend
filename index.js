var express = require('express')
var app = express();
var path = require('path');
var cors = require('cors');

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

console.log(__dirname)

app.get('/index', (req, res) => {
    res.sendFile(__dirname + "/views/stock.html");
    //res.send("index");
})


require("./routes/item_list")(app);
require("./routes/stock_rec")(app);

app.listen(3000, () => console.log('listening on 3000'));

module.exports = app;