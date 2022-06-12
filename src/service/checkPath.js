import {lstat,access} from "fs/promises";
import path from "path";
import {CurrentFolder} from './currentFolder.js'
import {OPERATION_FAILED} from "../cli/message.js";

export  const isDir = async (path) => {
    try {
        const stat =  await lstat(path);
        return  stat.isDirectory();

    } catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }

}

export const getTransitionPath = (checkPath) => {
    let resultPath;

    if(checkPath){
        if(path.isAbsolute(checkPath)){
            resultPath= checkPath;
        }
        else{
            resultPath= path.join(CurrentFolder.get(),checkPath);
        }
    }
    return resultPath;
}
export  const checkPathValid = async (path) => {
    try {
        await access(path)
        return true;

    } catch (e) {
       return false;
    }

}