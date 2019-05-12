var array = [17,15,14,17,21,14];
var findDupl_arr = [];
for (var i=0; i<array.length; i++){
    for (var j=i+1;j<array.length; j++){
        if(array[i]==array[j]){
            findDupl_arr.push(array[i]);
        }
    }
}

console.log(findDupl_arr)
