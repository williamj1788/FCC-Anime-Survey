var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url,true);
  console.log(q);
  var data = q.query;
  if(data.name){
    fs.readFile('responses.json', function(err,content){
      var parseJson = JSON.parse(content);
      x = content;
      parseJson.responses.push(data);
      fs.writeFile('responses.json', JSON.stringify(parseJson,null,2), function (err) {
        if (err) throw err;
        console.log("Fin");
      });
      res.end(x);
    })
  }else{
    console.log("No Data!")
  }
 
  
  
  
}).listen(8080);

