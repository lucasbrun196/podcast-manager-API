import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast_model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodCast = async () : Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
}