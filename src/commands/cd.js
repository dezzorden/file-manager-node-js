import {OPERATION_FAILED} from "../cli/message.js";
import {getTransitionPath, isDir} from "../service/checkPath.js";
import {CurrentFolder} from "../service/currentFolder.js";

export const getDir =  async ( path) => {

    try{
        const resolvedPath = getTransitionPath(path);
        if(  !await isDir(resolvedPath)){
            throw new Error("Папка не существует")
        }
        return resolvedPath;

    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
        return CurrentFolder.get();
    }

};