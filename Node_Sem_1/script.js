const http = require('http');

let counter1 = 0;
let counter2 = 0;
const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
    // // console.log("Запрос получен");
    // res.end('<h1>Hello world</h1>')
    if(req.url === '/') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        counter1++;
        res.end(`
        <h1>Корневая страница</h1>
        <p>Просмотров ${counter1}</p>
        <a href="/about">О сайте</a>`);
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        counter2++;
        res.end(`<h1>Корневая страница</h1>
        <p>Просмотров ${counter2}</p>
        <a href="/">Перейти на главную страницу</a>`);
    } else {
        res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
        res.end(`<a href="/">Страница не найдена</a>`);
    }
})

const port = '3000';
server.listen(port);