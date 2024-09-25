import { IncomingMessage, ServerResponse } from 'http'; 
import { serviceListEp } from '../service/list_ep_service';
import { serviceFilterEp } from '../service/filter_ep_service';
import { StatusCode } from '../utils/status_code';
import { ContentType } from '../utils/content_type';

export const getListEp = async (req : IncomingMessage, res : ServerResponse) => {
    const content : Object = await serviceListEp();
    res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
    res.end(JSON.stringify(content));
}


export const getFilterEp = async (req: IncomingMessage, res: ServerResponse) => {
   
    const content : Object = await serviceFilterEp(req.url);
    res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON});
    res.end(JSON.stringify(content));
} 