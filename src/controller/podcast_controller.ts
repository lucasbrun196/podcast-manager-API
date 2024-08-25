import { IncomingMessage, ServerResponse } from 'http'; 
import { serviceListEp } from '../service/list_ep_service';
import { serviceFilterEp } from '../service/filter_ep_service';

export const getListEp = async (req : IncomingMessage, res : ServerResponse) => {
    const content : Object = await serviceListEp();
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
}


export const getFilterEp = async (req: IncomingMessage, res: ServerResponse) => {
    const content : Object = await serviceFilterEp('flow');
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
} 