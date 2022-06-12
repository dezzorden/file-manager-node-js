import {EOL,cpus,homedir,userInfo,arch} from "os";

export const infoEOL = () => {
    console.log(JSON.stringify(EOL));
}

export const infoCPUs = () => {
    console.table(cpus(), ["model", "speed"]);
}

export const infoHomeDir = () => {
    console.log(JSON.stringify(homedir()));
}

export const infoUsername = () => {
    console.log(userInfo().username);
}

export const infoCPUArchitecture = () => {
    console.log(arch());
}