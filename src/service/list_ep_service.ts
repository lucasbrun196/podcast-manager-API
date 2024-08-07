import { repositoryPodCast } from "../repositories/podcast_repository";


export const serviceListEp = async () => {
    const data = await repositoryPodCast(); 

    return data;
}