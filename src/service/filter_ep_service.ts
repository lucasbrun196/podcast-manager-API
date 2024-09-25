import { IncomingMessage } from "http";
import { repositoryPodCast } from "../repositories/podcast_repository"


export const serviceFilterEp = async (podcastName : string | undefined) => {
    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repositoryPodCast(queryString);

    return data;
}