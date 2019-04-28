try{
    for(i = 0; i>-1 ; i++){
        console.log(i);

    if (i > 10000) {throw new Error ("Браузер завис")}
    }
    }
catch (error ){
    console.log(error.message)
}