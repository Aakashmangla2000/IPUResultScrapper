var fs=require('fs');
var data=fs.readFileSync('IT.json');
var data2=fs.readFileSync('CSE.json');
var elements=JSON.parse(data);
var elements2=JSON.parse(data2);

const express = require("express");
const app = express();
const cors=require('cors');

app.listen(3000, () => console.log("Server Start at 3000 Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/IT',alldata);
function alldata(request,response)
{     
    response.send(elements);
}

app.get('/CSE',alldata2);
function alldata2(request,response)
{
    response.send(elements2);
}
