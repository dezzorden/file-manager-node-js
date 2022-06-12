import { rm } from 'fs/promises';
import {CurrentFolder} from '../service/currentFolder.js'
import {OPERATION_FAILED} from "../cli/message.js";
import { checkPathValid } from "../service/checkPath.js";

export const remove = async (file) => {
    try {
        const path =`${CurrentFolder.get()}/${file}`;
        if(await checkPathValid(path)){
            rm(path);
            console.log(`Файл ${path} удалён!`)
        }else {
           throw Error('Файл не найден!');
        }

    }catch (e){
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }
};
