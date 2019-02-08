var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  
  res.setHeader('Access-Control-Allow-Origin','*');
  res.writeHead(200, {'Content-Type': 'text/plain'});
 
  var q = url.parse(req.url,true);
  var data = q.query;
  
  if(data.name){
    fs.readFile('responses.json', function(err,content){
      
      var parseJson = JSON.parse(content);
      parseJson.responses.push(data);
      
      fs.writeFile('responses.json', JSON.stringify(parseJson,null,2), function (err) {
        if (err) throw err;
        console.log("Fin");
      });
      
      res.end(content);
    })
  }else{
    console.log("No Data!")
  }
 
}).listen(8080);

