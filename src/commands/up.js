import * as path from "path"
import {CurrentFolder} from "../service/currentFolder.js";

export const getUp =  () => {
    return path.join(CurrentFolder.get(),"..");
};