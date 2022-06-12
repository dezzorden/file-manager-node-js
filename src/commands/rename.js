import {rename as getRename } from 'fs/promises';
import {CurrentFolder} from '../service/currentFolder.js'
import {OPERATION_FAILED} from "../cli/message.js";
import {checkPathValid} from "../service/checkPath.js";

export const rename = async (name,rename) => {

    try {

        if(checkPathValid(`${CurrentFolder.get()}/${rename}`)){
            throw Error(`Файл ${CurrentFolder.get()}/${rename} уже существует!`)
        }

        await getRename(`${CurrentFolder.get()}/${name}`, `${CurrentFolder.get()}/${rename}`);
        console.log(`Файл ${CurrentFolder.get()}/${name} переименован в ${CurrentFolder.get()}/${rename}`)
    }catch (e){
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }

}