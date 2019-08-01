var fs = require('fs');
var express = require('express');

var app = express();

app.locals.jdata = require("./ko.json");
var option = { encoding: 'utf-8', flag: 'w'};
var data = app.locals.jdata;
var size;



for (var i = 0; i < data.map.length;i++)
{
    
    if(data.map[i] != null)
    {
    for (var j = 0; j < data.map[i].length; j++)
   {
      if (data.map[i][j] == 52)
         data.map[i][j] = 66;
   }
    }
}
/*
for (var i = 0; i < data.map.length;i++)
{
    if(data.map[i] != null)
    {
   for (var j = 0; j < data.map[i].length; j++)
   {
      if (data.map[i][j] == 66)
         data.map[i][j] = 116;
   }
    }
}
*/
var obj = data;
obj = JSON.stringify(obj);

fs.writeFileSync('./ko.json',obj,option);