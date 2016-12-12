var sum = 0;
var args = process.argv;
args.forEach(function(item, index, array) {
    if (index < 2) {
        return;
    }

    sum += Number(item);

});

console.log(sum);