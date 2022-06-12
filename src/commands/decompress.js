import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import {CurrentFolder} from "../service/currentFolder.js";
import {OPERATION_FAILED} from "../cli/message.js";

export const decompress = async (compressfile,decompressfile) => {
     try {
          const Brotli = createBrotliDecompress();
          const readStream = createReadStream(`${CurrentFolder.get()}/${compressfile}`);
          const writeStream = createWriteStream(`${CurrentFolder.get()}/${decompressfile}`);

         const stream = readStream.pipe(Brotli).pipe(writeStream);

         stream.on("finish", () => {
             console.log(`Файл ${CurrentFolder.get()}/${compressfile} разархивирован в ${CurrentFolder.get()}/${decompressfile} 😎`);
         });

     }catch (e) {
          console.error(`${OPERATION_FAILED}: ${e.message}`)
     }
};
