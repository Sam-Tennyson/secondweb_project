var express = require('express')
var app = express();

const port = 3000;
app.use(express. static(__dirname + '/'));
app.listen(port)

console.log("Server started At "+ port)

app.post('/api/login', function(req, res) {
    var results;
        results = [{
            title: "Java",
            instructor: "Saurabh",
            level: "Begineer",
            total_video: 10
        },{
            title: "C++",
            instructor: "Saurabh",
            level: "Begineer",
            total_video: 15
        },{
            title: "C",
            instructor: "Saurabh",
            level: "Begineer",
            total_video: 12
        },{
            title: "Web Development",
            instructor: "Shahid",
            level: "Begineer",
            total_video: 20
        }];
        res.json(results);
});