import { readdir } from 'fs/promises';
import {OPERATION_FAILED} from "../cli/message.js"

export const list = async (path) => {
    try {
      const files = await readdir(path);
      console.table(files)
    }catch (e){
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }
};