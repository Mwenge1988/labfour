
//  export named function
exports.Cheer = function () {
    console.log('Go! ' + this.teamname + ' Go!');
};

exports.Boo = function () {
    console.log(this.teamname + ' You suck!');
};