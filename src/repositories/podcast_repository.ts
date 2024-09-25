import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast_model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodCast = async (podcastName? : string) : Promise<Podcast[]> => {
    const language = "utf-8"
    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast : Podcast) => podcastName === podcast.podcastName)
    }
    return jsonFile;
}