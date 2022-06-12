import {CurrentFolder} from '../service/currentFolder.js'
import { writeFile} from 'fs/promises';
import {OPERATION_FAILED} from "../cli/message.js";

export const add = async (fileName,content ='') => {

    const src = CurrentFolder.get()+'/'+fileName;

    try {
        await writeFile(src,content,{flag:'wx'})
        console.log('Файл создан')
    } catch(e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }
};
