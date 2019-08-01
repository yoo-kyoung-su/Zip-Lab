var fs = require('fs');
var express = require('express');

var app = express();

app.locals.jdata = require("./ko1.json");
var option = { encoding: 'utf-8', flag: 'w'};
var data = app.locals.jdata;

for (var i =  0; i< data.map.length; i++)
{
    if (data.map[i] != null )
    {
     
        
        
            for (var j=1;j<data.map[i].length;j++)
            {
                data.map[i][j-1] = data.map[i][j];
                data.map[i][j] = null;
            }
        

    }
}

for (var i =  0; i< data.detail.length; i++)
{
    if (data.detail[i] != null )
    {
       
        
       
            for (var j=1;j<data.detail[i].length;j++)
            {
                data.detail[i][j-1] = data.detail[i][j];
                data.detail[i][j] = null;
            }
        

    }
}

var obj = data;
obj = JSON.stringify(obj);

fs.writeFileSync('./ko2.json',obj,option);