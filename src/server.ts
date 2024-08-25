import * as http from "http";
import { getFilterEp, getListEp } from "./controller/podcast_controller";

const PORT = process.env.PORT
const server : http.Server = http.createServer( async (req : http.IncomingMessage , res : http.ServerResponse) => {
    
    
    if(req.method === "GET" && req.url === '/api/list'){
        await getListEp(req, res);
    }
    if(req.method === "GET" && req.url === '/api/ep'){
        await getFilterEp(req, res)
    }
});

server.listen(PORT, () => {
    console.log(`Running server on port: ${PORT}`); 
});

