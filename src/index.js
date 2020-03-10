module.exports = function check(str, bracketsConfig) {
    let res = false;
    let arr = [];
    let splitedArr = str.split('');
    let count = 0;
    
    if (splitedArr.length % 2 != 0) {
        return res = false
    };
    splitedArr.forEach(function (elem) {
        
        for (let i = 0; i <= bracketsConfig.length - 1; i++) {
            if (bracketsConfig[i][0] != bracketsConfig[i][1]) {
                if (elem === bracketsConfig[i][0]) {
                    arr.push(elem);
                } else if (elem === bracketsConfig[i][1] && bracketsConfig[i][0] === arr[arr.length - 1]) {
                    arr.pop();
                }
            } else {
                if (elem === bracketsConfig[i][0] && bracketsConfig[i][0] != arr[arr.length - 1]) {
                    arr.push(elem);
                } else if (elem === bracketsConfig[i][0] && bracketsConfig[i][0] === arr[arr.length - 1]) {
                    arr.pop();

                }
            }
        }

    });

    if (arr.length === 0) {
        res = true;
    }
    return res
}