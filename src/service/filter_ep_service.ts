import { repositoryPodCast } from "../repositories/podcast_repository"


export const serviceFilterEp = async (podcastName : string) => {
    const data = await repositoryPodCast(podcastName);

    return data;
}