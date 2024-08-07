import * as http from "http";
import { getListEp } from "./controller/podcast_controller";

const PORT = process.env.PORT
const server : http.Server = http.createServer( async (req : http.IncomingMessage , res : http.ServerResponse) => {
    if(req.method === "GET"){
        await getListEp(req, res);
    }
});

server.listen(PORT, () => {
    console.log(`Running server on port: ${PORT}`); 
});

