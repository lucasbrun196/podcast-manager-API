import * as http from "http";

const PORT = process.env.PORT
const server : http.Server = http.createServer((requeste : http.IncomingMessage , response : http.ServerResponse) => {

});

server.listen(PORT, () => {
    console.log(`Running server on port: ${PORT}`); 
});

