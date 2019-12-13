//11
function firstLast6(arr){
    var nums = '';
    if(arr[0]==6 || arr[arr.length-1] ==6){
        nums = true;
    }else{
        nums = false;
    }
    return nums;
}

//12
function has23(arr) {
    if (arr[0] == 2 || arr[1] == 2) {
        return true;
    } else if (arr[0] == 3 || arr[1] == 3) {
        return true;
    } else {
        return false;
    }
}
//13
function fix23(arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i]==2 && arr[i + 1]==3){
            arr[i + 1]=0;
        }
    }
    return arr;
}
//14
function countYZ(str) {
    var total = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "y" && str[i + 1] == " ") {
            total = total + 1;
        }
        if(str[i]== "z" && str[i + 1]== " "){
            total = total + 1;
        }
    }
    if(str[str.length-1] == "y"){
        total = total + 1;
    }
    if(str[str.length-1] == "z"){
        total = total + 1;
    }
    return total;
}
//15
function endOther(str1,str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if ((str2[str2.length - 1] == str1[str1.length - 1]) && (str2[str2.length - 2] == str1[str1.length - 2]) && (str2[str2.length - 3] == str1[str1.length - 3])) {
        return true;
    } else if (str1.length == 1 && str2[str2.length - 1] == str1[str1.length - 1]) {
        return true;
    } else if (str1.length == 2 && str2[str2.length - 1] == str1[str1.length - 1] && str2[str2.length - 2] == str1[str1.length - 2]) {
        return true;
    } else if (str2.length == 2 && str2[str2.length - 1] == str1[str1.length - 1] && str2[str2.length - 2] == str1[str1.length - 2]) {
        return true;
    }

    return false;
}
//16
function starOut(arr){
    var x = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i + 1] != "*" && arr[i - 1] != "*" && arr[i] != "*"){
            x = x + arr[i];
        }
    }
    return x;
}
//17
function getSandwich(arr){
    var y = [];
    if(!(arr.indexOf("bread") == arr.lastIndexOf("bread"))){
       return arr.substring(arr.indexOf("bread") +5, arr.lastIndexOf("bread"));
    }else {
        return y;
    }
}
//18
function canBalance(arr){
    sum1 = 0;
    sum2 = 0;
    for(var i = 0; i < arr.length; i++) {
        sum1 += arr[i];

        for(var k = i + 1; k < arr.length; k++){
            sum2 += arr[k];
        }
        if(sum1 == sum2){
            return true;
        }

        sum2 = 0;
    }

    return false;
}
//19
function countClumps(arr){
    var totalClumps = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i + 1]){
            totalClumps = totalClumps + 1;
        }
        if(arr[i] == arr[i + 1] && arr[i] == arr[i +2]){
            totalClumps = totalClumps - 1;
        }
    }
    return totalClumps;
}
//20
function evenlySpaced(a,b,c) {
    var sum = a + b + c;
    if (a == b && b == c && a == c) {
        return true;
    }
    if ((a == b) || (b == c)) {
        return false;
    }
    if ((sum / 3) == (a)) {
        return true;
    }
    if ((sum / 3) == (b)) {
        return true;
    }
    if ((sum / 3) == (c)) {
        return true;
    }
    if ((sum / 3) == (1)) {
        return true;
    }
    if ((sum / 3) == (2)) {
        return true;
    }
    return false;
}