function main(input){
  var solArr=[];
  var testArr=input.split(" ").map(function(item){
    return parseInt(item);
  });
  testArr.sort();
  console.log(testArr);
  for (var i =0;i<testArr.length;i++){
    for (var j=i+1;j<testArr.length;j++){
      var sum=0
      sum=testArr[i] + testArr[j];
      var res=(0-sum);
      for (var k=j+1;k<testArr.length;k++){
        if (testArr[k]===res){
          solArr.push([testArr[i],testArr[j],testArr[k]]);
        }
      }
    }
  }
var ret=remove_duplicates(solArr);
console.log(ret);
}
function remove_duplicates(arr) {
    var obj = {};
    var ret_arr = [];
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    }
    return ret_arr;
}
main("4 5 -1 -2 -7 2 -5 -3 -7 -3 1");
main("-1 -6 -3 -7 5 -8 2 -8 1");
main("-5 -1 -4 2 9 -9 -6 -1 -7");
