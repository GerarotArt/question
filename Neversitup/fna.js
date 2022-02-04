async function fnA () {
 console.log('Begin function fnA');
 var array = new Array(12);
 let data = [];

 for(var i = 0; i < array.length; i++){
     console.log('Item: ' + (i) + ' of ' + (array.length - i) + '<br/>'); 
     data.push((array.length - i))
  }
  return await new Promise(resolve => {
        setTimeout(async () => {
            console.log("End function fnA");
            resolve(data)
        }, 12000);
    })
}
fnA()