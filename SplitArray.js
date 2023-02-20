// spit an array into small arrays
const SplitArray = (arr, chunckSize) =>{
    const res = [];
    for(let i =0; i < arr.length; i += chunckSize ){
    //    const chunk = arr.slice(i, i+chunckSize)
    //    res.push(chunk)
       res.push(arr.slice(i, i+chunckSize))
    }
    return res;
}

console.log(SplitArray(numbers,3))



const divideArray= (array, size) =>{
    const res= [];
    for(let i = 0; i < array.length; i += size){
        const chunk = array.slice(i, i+size)
        res.push(chunk)
    }
    return res;
}

console.log(divideArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4))
