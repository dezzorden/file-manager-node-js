import {createHash} from 'crypto';
import {readFile} from 'fs';
import {CurrentFolder} from "../service/currentFolder.js";
import {OPERATION_FAILED} from "../cli/message.js";

export const calculateHash = async (file) => {

    try {
        readFile(`${CurrentFolder.get()}/${file}`, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(createHash('sha256').update(data).digest('hex'));
        });
    }catch (e){
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }


};
