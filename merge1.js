

var fs = require('fs');
var express = require('express');

var app = express();

app.locals.jdata = require("./ks.json");
app.locals.jdata1 = require("./dj.json");
var option = { encoding: 'utf-8', flag: 'w'};
var data = app.locals.jdata;
var data1 = app.locals.jdata1;
var size;
var maxsize;
var minsize;
var flag;
var size1;
var maxsize1;
var minsize1;
var flag1;


if(data.map.length <= data1.map.length)
    size = data1.map.length;
else
    size = data.map.length;


if(data.detail.length <= data1.detail.length)
    size1 = data1.detail.length;
else
    size1 = data.detail.length;




var mergedata = {

    map : Array(size).fill(null).map(() => Array()),
    detail: Array(size1).fill(null).map(() => Array()),
    place : {
    town  :{} ,
    mine  :{} ,
    forest : {},
    hunt : {}

}
}
for(var i=0; i<size; i++)
{
    
      if (data.map[i] == null || data1.map[i] == null)
      {
        if(data.map[i] == null && data1.map[i] == null)
            mergedata.map[i] = null;

        else if(data.map[i] == null)
            mergedata.map[i] = data1.map[i];

          else if(data1.map[i] == null)
            mergedata.map[i] = data.map[i];

      }
          
      else
      {

        if(data.map[i].length > data1.map[i].length)
        {
          maxsize = data.map[i].length;
          minszie = data1.map[i].length;
          flag = 0;
        }
        else
        {
            maxsize = data1.map[i].length;
            minsize= data.map[i].length;
            flag = 1;
        }
        
        for(var j=0; j<minsize; j++)
        {

            if (data.map[i][j] > data1.map[i][j])
              mergedata.map[i][j] = data.map[i][j];
            else 
              mergedata.map[i][j] = data1.map[i][j];  
        }
        
        if (flag == 0)
        { 
          for (var j=minsize; j<maxsize;j++)
            mergedata.map[i][j] = data.map[i][j];
        }
        else {
            
          for (var j=minsize; j<maxsize;j++)
            mergedata.map[i][j] = data1.map[i][j];
        }
      }       
}


for(var i=0; i<size1; i++)
{
    
      if (data.detail[i] == null || data1.detail[i] == null)
      {
        if(data.detail[i] == null && data1.detail[i] == null)
            mergedata.detail[i] = null;

        else if(data.detail[i] == null)
            mergedata.detail[i] = data1.detail[i];

          else if(data1.detail[i] == null)
            mergedata.detail[i] = data.detail[i];

      }
          
      else
      {

        if(data.detail[i].length > data1.detail[i].length)
        {
          maxsize1 = data.detail[i].length;
          minszie1 = data1.detail[i].length;
          flag1 = 0;
        }
        else
        {
            maxsize1 = data1.detail[i].length;
            minsize1= data.detail[i].length;
            flag1 = 1;
        }
        
        for(var j=0; j<minsize1; j++)
        {

            if (data.detail[i][j] > data1.detail[i][j])
              mergedata.detail[i][j] = data.detail[i][j];
            else 
              mergedata.detail[i][j] = data1.detail[i][j];  
        }
        
        if (flag1 == 0)
        { 
          for (var j=minsize1; j<maxsize1;j++)
            mergedata.detail[i][j] = data.detail[i][j];
        }
        else {
            
          for (var j=minsize1; j<maxsize1;j++)
            mergedata.detail[i][j] = data1.detail[i][j];
        }
      }       
}



//console.log(mergedata.detail)

var obj = mergedata;
obj = JSON.stringify(obj);

fs.writeFileSync('./ko.json',obj,option);