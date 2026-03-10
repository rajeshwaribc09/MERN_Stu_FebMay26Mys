function parseConfig(text){
    try{
        let config=JSON.parse(text);
        console.log(config);
        return config;    }
    catch(err){
        console.log("Error Parsing config:",err.message);
        return null;
    }
    finally{
        console.log("Finally block executed");
    }
}
parseConfig('{"theme":"dark"}');
parseConfig('{"theme"}');

