module.exports = function (number) {
    if (number == 1) {
        return false;
    }
    var flag = 1;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        return true;
    }
    else {
        return false;
    }
}