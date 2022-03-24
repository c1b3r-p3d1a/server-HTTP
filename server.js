//Hecho por c1b3r-p3d1a
const http = require('http')
const fs = require('fs')

const host = '127.0.0.1'
const port = 2009

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error){
            res.writeHead(404)
            res.write("[-] Imposible localizar el archivo")
        }else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, host, () => {
    setTimeout(() => {
        console.log(" ")
    }, 0);
    setTimeout(() => {
        console.log(" ")
    }, 0);
    setTimeout(() => {
        console.log("    cccc   i   bbbb    eeeeee   rrrrrrr       ")
    }, 0);
    setTimeout(() => {
        console.log("   cc      i   b   b   eeeeee   rr   rrr      ")
    }, 100);
    setTimeout(() => {
        console.log("   cc      i   b b     eee      rrrrrrr     ------   P3d1A")
    }, 200);
    setTimeout(() => {
        console.log("   cc      i   b   b   eeeeee   rr rrrr ")
    }, 300);
    setTimeout(() => {
        console.log("    cccc   i   bbbb    eeeeee   rr  rrrr  ")
    }, 400);
    setTimeout(() => {
        console.log(" ")
    }, 500);
    setTimeout(() => {
        console.log(" ")
    }, 500);
    setTimeout(() => {
        console.log("[+] Servidor funcionando en", host, "por el puerto", port)
    }, 600);
    
})
