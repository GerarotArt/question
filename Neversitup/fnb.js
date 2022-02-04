const param1 = process.argv[2]
async function fnB (param1) {
    console.log('Begin function fnB');
    console.log(param1);
    if(param1 == 99){
        console.log('Good 99');
    }else{
        console.log('Not Good 99');
    }

    return await new Promise(resolve => {
        setTimeout(async () => {
            console.log("End function fnb");
            resolve(22)
        }, 22000);
    })

}
fnB(param1)