import { IncomingMessage, ServerResponse } from 'http'; 
import { serviceListEp } from '../service/list_ep_service';
import { serviceFilterEp } from '../service/filter_ep_service';
import { ContentType } from '../utils/content_type';
import { FilterPodCastModel } from '../models/filter_podcast_model';

export const getListEp = async (req : IncomingMessage, res : ServerResponse) => {
    const content : FilterPodCastModel = await serviceListEp();
    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end()
}


export const getFilterEp = async (req: IncomingMessage, res: ServerResponse) => {
    const content: FilterPodCastModel = await serviceFilterEp(req.url);
    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
    res.write(JSON.stringify(content.body));
    res.end()
} 