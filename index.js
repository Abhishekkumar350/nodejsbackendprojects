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
const tempOver = fs.readFileSync(`${__dirname}/templates/templates-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/templates-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/templates-product.html`,'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj= JSON.parse(data);
const server = http.createServer((req,res)=>{
    const pathName = req.url;
//overview page
    if(pathName==='/' || pathName==='/overview'){
        res.end(tempOverview);
//product page
    }else if (pathName==='/product'){
        res.end('This is the PRODUCT');

    }else{
        res.writeHead(404,{
            'constent-type': 'text/html'
        });
        res.end('<h1>PAGE NOT FOUND!</h1>')
    }
    
});
server.listen()