const data = process.argv[2]
async function test (res) {
   const test =  res.substr(-2)
   console.log(test);
}

test(data)