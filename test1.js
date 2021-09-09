const param1 = process.argv[2]
async function fnA () {
    console.log('Begin function fnA');
    var array = new Array(12);
    let data = 0;
   
    for(var i = 0; i < array.length; i++){
        console.log('Item: ' + (i) + ' of ' + (array.length - i) + '<br/>'); 
        // data.push((array.length - i))
        data = data+(array.length - i)
     }
     return await new Promise(resolve => {
           setTimeout(async () => {
               console.log("End function fnA");
               resolve(data)
           }, 12000);
       })
   }

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

async function test1 (param1) {
    const dataA = await fnA()
    const dataB = await fnB(param1)
    const countdata = dataA+dataB;
    return  countdata;
}

test1(param1)