import { createInterface } from 'readline';
import {getArgUserName} from "./cli/args.js";
import * as message from "./cli/message.js"
import {CurrentFolder, printСurrentDirectory} from './service/currentFolder.js'
import {getUp} from "./commands/up.js";
import {getDir} from "./commands/cd.js";
import {list} from "./commands/list.js";
import {cat} from "./commands/cat.js";
import {getTransitionPath} from "./service/checkPath.js";
import {add} from "./commands/add.js";
import {rename} from "./commands/rename.js";
import {copy} from "./commands/copy.js";
import {remove} from "./commands/delete.js";
import {infoCPUArchitecture, infoCPUs, infoEOL, infoHomeDir, infoUsername} from "./commands/os.js";
import {calculateHash} from "./commands/calcHash.js";
import {compress} from "./commands/compress.js";
import {decompress} from "./commands/decompress.js";

const username = getArgUserName();

console.log(`${message.WELCOME}, ${username}!`)
console.log(`${message.DIRECTORY}, ${CurrentFolder.get()}`)

const readlineStream = createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineStream.on('line', async (input) => {
    const [command , ...args] = input.split(" ");
    switch (command) {

        case  "up":
            CurrentFolder.set(getUp());
            break;
        case  "cd":
            CurrentFolder.set(await getDir(args[0]));
            break;
        case  "ls":
            await list(CurrentFolder.get());
            break;
        case  "cat":
            await cat(getTransitionPath(args[0]));
            break;
        case  "add":
            await add(args[0], args[1]);
            break;
        case  "rn":
            await rename( args[0], args[1])
            break;
        case  "cp":
            await copy(args[0],args[1] )
            break;
        case  "mv":
            await copy(args[0],args[1] ,true)
            break;
        case  "rm":
            await remove(args[0]);
            break;
        case  "os":
            switch (args[0]) {
                case "--EOL":
                    infoEOL();
                    break;
                case "--cpus":
                    infoCPUs();
                    break;
                case "--homedir":
                    infoHomeDir();
                    break;
                case "--username":
                    infoUsername();
                    break;
                case "--architecture":
                    infoCPUArchitecture();
                    break;
            }
            break;
        case  "hash":
            await calculateHash(args[0]);
            break;
        case  "compress":
            await compress(args[0],args[1] );
            break;
        case  "decompress":
            await decompress(args[0],args[1] );
            break;
        case  ".exit":

            readlineStream.close();
            break;
        default:
            console.error(message.INVALID_INPUT);
    }
    printСurrentDirectory();

});

readlineStream.on('close',  () => {
    console.log(`${message.EXIT}, ${username}!`)
})