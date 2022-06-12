import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import {CurrentFolder} from "../service/currentFolder.js";
import {OPERATION_FAILED} from "../cli/message.js";

export const compress = async (file,compressfile) => {
    try {
        const Brotli = createBrotliCompress();
        const readStream = createReadStream(`${CurrentFolder.get()}/${file}`);
        const writeStream = createWriteStream(`${CurrentFolder.get()}/${compressfile}`);

        const stream = readStream.pipe(Brotli).pipe(writeStream);

        stream.on("finish", () => {
            console.log(`Файл ${CurrentFolder.get()}/${file} заархивирован в файл ${CurrentFolder.get()}/${compressfile} 😎`);
        });
    }catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }
};
