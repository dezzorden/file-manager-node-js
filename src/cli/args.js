
export const getArgUserName = (name = false) => {

    try {
        const userInputArgs = process.argv.slice(2);
        const args = userInputArgs[0].split("=")
        if(args[0]==='--username'){
            return args[1];
        }
    }catch (e){
        throw Error('Не верная команда для запуска приложения\n Используйте: npm run start -- --username=your_username')
    }

};


