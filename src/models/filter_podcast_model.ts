import { Podcast } from "./podcast_model";

export interface FilterPodCastModel{
    statusCode: number,
    body: Podcast[]
}