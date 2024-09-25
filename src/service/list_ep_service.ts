import { FilterPodCastModel } from "../models/filter_podcast_model";
import { repositoryPodCast } from "../repositories/podcast_repository";
import { StatusCode } from "../utils/status_code";


export const serviceListEp = async (): Promise<FilterPodCastModel> => {

    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }
    const data = await repositoryPodCast(); 
    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data


    return responseFormat;
}