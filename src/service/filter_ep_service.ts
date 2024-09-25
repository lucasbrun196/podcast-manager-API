import { FilterPodCastModel } from "../models/filter_podcast_model";
import { repositoryPodCast } from "../repositories/podcast_repository"
import { StatusCode } from "../utils/status_code";


export const serviceFilterEp = async (podcastName : string | undefined): Promise<FilterPodCastModel> => {
    let responseFormat: FilterPodCastModel = {
        statusCode: 0,
        body: []
    }
    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repositoryPodCast(queryString)
    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT
    responseFormat.body = data

    return responseFormat;
}