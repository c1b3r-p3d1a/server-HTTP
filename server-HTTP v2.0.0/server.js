const express = require('express');
const readline = require("readline");
const app = express();
const fs = require('fs');
const serv = require('http').Server(app);
const { Server } = require("socket.io");
const io = new Server(serv);

console.log('\x1b[0m', '');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    console.log('\x1b[32m', '[+] Un usuario se conectó');
    console.log('\x1b[0m', '');
    socket.on('disconnect', () => {
        console.log('\x1b[31m', '[-] Un usuario abandonó la web');
        console.log('\x1b[0m', '');
      });
  });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question("Introduzca un puerto (4 números): ", function (port) {
    console.log('\x1b[0m', '');
    serv.listen(port);
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
        console.log("[+] Server escuchando por http://localhost:" + port)
    }, 600);    
});

