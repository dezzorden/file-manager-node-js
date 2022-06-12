import {createReadStream} from 'fs';
import {OPERATION_FAILED} from "../cli/message.js";

export const cat = async (path) => {
    try{
        const readableStream = createReadStream(path, {encoding: "utf8"});
        for await (const chunk of readableStream) {
            process.stdout.write(chunk);
        }
        console.log('\n');
    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }
};