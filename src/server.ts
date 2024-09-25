import * as http from "http";
import { app } from "./app";


const PORT = process.env.PORT
const server : http.Server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Running server on port: ${PORT}`); 
});
