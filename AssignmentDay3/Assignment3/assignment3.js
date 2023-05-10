var famEnum;
(function (famEnum) {
    famEnum[famEnum["Mother"] = 0] = "Mother";
    famEnum[famEnum["Father"] = 1] = "Father";
    famEnum[famEnum["brother"] = 2] = "brother";
})(famEnum || (famEnum = {}));
console.log(famEnum[0]);
console.log(famEnum[1]);
console.log(famEnum[2]);
