function check(str, bracketsConfig) {
    let res = false;
    let arr = [];
    let splitedArr = str.split('');
    let count = 0;
   //console.log(splitedArr);
   console.log(splitedArr.length);
    if (splitedArr.length % 2 != 0) {return res = false};

    splitedArr.forEach(function(elem) {
        //console.log(elem);
      for (let i=0; i <= bracketsConfig.length - 1; i++) {
        if (bracketsConfig[i][0] != bracketsConfig[i][1]) {
            if (elem === bracketsConfig[i][0]) {
            arr.push(elem);
            console.log(arr);
            } else if (elem === bracketsConfig[i][1] && bracketsConfig[i][0] === arr[arr.length-1]) {
                //console.log(arr);
                //console.log(arr[arr.length-1],bracketsConfig[i][0]);
                arr.pop();
                console.log(arr);          
            }
        } else { 
            if (elem === bracketsConfig[i][0] && bracketsConfig[i][0] != arr[arr.length-1] ) {
                arr.push(elem);
                console.log(arr);
        
            } else if (elem === bracketsConfig[i][0] && bracketsConfig[i][0] === arr[arr.length-1]) {
                arr.pop();
                  
            }
        }
    }
         
});
    if (arr.length === 0) {
        res = true;
    }
    console.log(res);
    return res
}

  
check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', [['8', '8'], ['7', '7'], ['{', '}'], ['|', '|']])
