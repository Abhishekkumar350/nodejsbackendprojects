const fs = require('fs');
const http = require('http');
const url = require('url');

/** 
const textIn = fs.readFileSync('starter/txt/input.txt','utf-8');
const textOut = `This is what we know about the avacado : ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync('starter/txt/output.txt', textOut);
console.log('File written!');

fs.readFile(`index.js`,'utf-8',(err,data)=>{
    console.log(data);
*/
//serever
const tempOver = fs.readFileSync(`${__dirname}/starter/templates/templateoverview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/templateproduct.html`,'utf-8');

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8');
const dataObj= JSON.parse(data);
const server = http.createServer((req,res)=>{
    const pathName = req.url;
//overview page
    if(pathName==='/' || pathName==='/overview'){
        res.end(tempOver);
//product page
    }else if (pathName==='/product'){
        res.end('This is the PRODUCT');
    }else if (pathName==='/api'){
       
        res.writeHead(200,{'content-type':'application/json'})
        res.end(data);
       }else{
            res.writeHead(404,{
            'constent-type': 'text/html',
            'my-own-header': 'hello-world',

        })
        res.end('<h1>PAGE NOT FOUND!</h1>')
    }

    
});


server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to req on port 8000')
});