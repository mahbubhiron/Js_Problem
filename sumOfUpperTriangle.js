function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    var sum=0;
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            sum = sum + j;
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }console.log(sum);
}

generatePyramid();