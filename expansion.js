var fs = require('fs');
var express = require('express');

var app = express();

app.locals.jdata = require("./ko1.json");
var option = { encoding: 'utf-8', flag: 'w'};
var data2 = app.locals.jdata;
var data1 = {

    map : Array(610).fill(null).map(() => Array()),
    detail: Array(610).fill(null).map(() => Array()),
    place : {
    town  :{} ,
    mine  :{} ,
    forest : {},
    hunt : {}

}
}


for (var i = 0;i<610;i++)
{
    for (var j=0;j<610; j++)
    {
       data1.map[i][j] = null;
       data1.detail[i][j] = null;
    }
}

for (var i = 1;i<109;i++)
{
    if (data2.map[i] != undefined)
    {
        for(var j = 1 ;j<103;j++)
        {
            if (data2.map[i][j] != undefined)
                data1.map[i+500][j+500] = data2.map[i][j];
        }
    }
    if (data2.detail[i] != undefined)
    {
        for (var j=1;j<103;j++)
        {
            if (data2.detail[i][j] != undefined)
                data1.detail[i+500][j+500] = data2.detail[i][j];
        }
    }
}




var obj = data1;
obj = JSON.stringify(obj);

fs.writeFileSync('./ko2.json',obj,option);
