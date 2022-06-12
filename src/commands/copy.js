import { copyFile,rm } from 'fs/promises';
import {CurrentFolder} from '../service/currentFolder.js'
import {OPERATION_FAILED} from "../cli/message.js";
import {checkPathValid} from "../service/checkPath.js";

export const copy = async (pathFile,pathCopyFile,delPathFile =false) => {
    try {
        if(checkPathValid(`${CurrentFolder.get()}/${pathCopyFile}`)){
            throw Error(`Файл ${CurrentFolder.get()}/${pathCopyFile} уже существует!`)
        }
        await copyFile(`${CurrentFolder.get()}/${pathFile}`,`${CurrentFolder.get()}/${pathCopyFile}`)
        console.log(`Файл ${CurrentFolder.get()}/${pathFile} скопирован в ${CurrentFolder.get()}/${pathCopyFile}`)
        if (delPathFile){
            rm(`${CurrentFolder.get()}/${pathFile}`);
            console.log(`Файл ${CurrentFolder.get()}/${pathFile} удалён!`)
        }
    }catch (e){
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }
};
