
import os from "os";
import * as message from "../cli/message.js";

export const CurrentFolder = {
    value: os.homedir(),
    get (){
        return this.value;
    },
    set (path){
        this.value= path;
    }
}
export const printСurrentDirectory = () => console.log(`${message.DIRECTORY} ${CurrentFolder.get()}`);