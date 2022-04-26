function greet(name){
    if (name === undefined){
        console.log('Hello there!');
    }else if (name === name.toUpperCase()){
        console.log('HELLO '+ name);
    }else if (name === name.isArray()){
        let nameList = ''
        for (i in name){
            nameList=nameList + i.stringify+', '
        };
        console.log('Hello, '+ nameList);
    } else{
        console.log ('Hello, '+ name);
    };
    };