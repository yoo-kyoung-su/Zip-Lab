var fs = require('fs');
var express = require('express');

var app = express();

app.locals.jdata = require("./mi.json");
var option = { encoding: 'utf-8', flag: 'w'};
var data = app.locals.jdata;

var arr = Array(50).fill(null).map(() => Array());

for (var i = 0;i<32;i++)
{
  for (var j=0;j<33;j++)
  {
    arr[i][j] = data.map[i+504][j+603];
    data.map[i+504][j+603] = null;
  }
}

for (var i=0;i<32;i++)
{
  for (var j=0;j<33;j++)
  {
    data.map[i+498][j + 620] = arr[i][j];
  }
}

var obj = data;
obj = JSON.stringify(obj);

fs.writeFileSync('./miresult.json',obj,option);