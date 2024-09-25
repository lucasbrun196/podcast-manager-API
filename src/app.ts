import * as http from "http";
import { getFilterEp, getListEp } from "./controller/podcast_controller";
import { Route } from "./routes/route";
import { HttpMethod } from "./utils/http_methos";

  
    
export const app = async (req : http.IncomingMessage , res : http.ServerResponse) => {
    
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""]
    
    
    if(req.method === HttpMethod.GET && baseUrl === Route.LIST){
        await getListEp(req, res);
    }
    if(req.method === HttpMethod.GET && baseUrl === Route.EP){
        await getFilterEp(req, res)
    }
}