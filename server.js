const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/my-app'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/my-app/index.html'));
});
console.log("send!");
app.listen(process.env.PORT || 3000);
console.log("listening");
