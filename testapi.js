const fetch = require('node-fetch')
 const thisIsSyncFunction = () => {
    return fetch('https://codequiz.azurewebsites.net/data')
    .then(res => res.json())
    .then(response =>  {
        return response.data;
    });
}
thisIsSyncFunction().then(number1=> {
    const calculation = number1 * 10;
    console.log(calculation);
})