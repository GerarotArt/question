const data = process.argv[2]
function  mod(data) {
   if(data%2 == 0){
    setTimeout(async () => {
        console.log(data);
    }, 15000);
   }else{
    setTimeout(async () => {
        console.log(data);
    }, 5000);
   }
}
mod(data)