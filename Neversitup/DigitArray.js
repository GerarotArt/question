const upArray = arr => {
    const cehcklent = arr.length - 1
    const lastcal = arr.pop() + 1
    if(arr.length === 0 && lastcal > 9){
      return [1,0];
    }else if(lastcal < 10) {
      arr[cehcklent] = lastcal
    }else{
      arr = upArray(arr)
      arr.push(0)
    }
    return arr
  };
  
upArray([9])