
function feetToMiles(feat) {
    var miles = feat / 5280;
    return miles.toFixed(5);
}
var feet = 25;
console.log(feet, "Feet =", feetToMiles(feet) + "miles");

function woodCalculatior(chair, table, khat) {
    chair = chair * 1;
    table = table * 3;
    khat = khat * 5;
    return chair + table + khat;
}
var chair = 5, table = 1, khat = 2;
console.log(chair + "ta Chair", table + "ta Table &", khat + "ta Khat banate lagbe", woodCalculatior(5, 1, 2) + "ft wood");

function bricksCalculate(totalFloor, floor1To10, floor11To15, above15) {
    var j = 0, k = 0;
    var floor1, floor2, floor3, a = 0;
    for (var i = 1; i <= totalFloor; i++) {
        if (i <= 10) {
            floor1 = i * floor1To10;
        } else if (i <= 15) {
            j++
            floor2 = j * floor11To15;
        } else if (i <= 20) {
            k++
            floor3 = k * above15;
        }
    }
    var totalfeet = floor1 + floor2 + floor3;
    // console.log(floor3);
    return totalfeet * 1000;
}

var totalFloor = 30, floor1To10Height = 15, floor11To15Height = 12, above15Height = 10;
console.log(bricksCalculate(totalFloor, floor1To10Height, floor11To15Height, above15Height));


function tinyFriend(arr) {
    var min = arr[0].length;
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i].length) {
            min = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}
var arr = ['keya', 'tan', 'ti', 'p'];

console.log(tinyFriend(arr));