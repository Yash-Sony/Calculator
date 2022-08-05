let numberAElement = document.getElementById("numberA");
let numberBElement = document.getElementById("numberB");
let resultGot = document.getElementById("giveResult");
let sign = document.getElementById("signGiven");

function add0() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 0;
    } else {
        numberBElement.value = numberBElement.value + 0;
    }
}

function add1() {
    if (sign.value === "") {
        numberAElement.value = (numberAElement.value) + 1;
    } else {
        numberBElement.value = (numberBElement.value) + 1;
    }
}

function add2() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 2;
    } else {
        numberBElement.value = numberBElement.value + 2;
    }
}

function add3() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 3;
    } else {
        numberBElement.value = numberBElement.value + 3;
    }
}

function add4() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 4;
    } else {
        numberBElement.value = numberBElement.value + 4;
    }
}

function add5() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 5;
    } else {
        numberBElement.value = numberBElement.value + 5;
    }
}

function add6() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 6;
    } else {
        numberBElement.value = numberBElement.value + 6;
    }
}

function add7() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 7;
    } else {
        numberBElement.value = numberBElement.value + 7;
    }
}

function add8() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 8;
    } else {
        numberBElement.value = numberBElement.value + 8;
    }
}

function add9() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + 9;
    } else {
        numberBElement.value = numberBElement.value + 9;
    }
}

function addPoint() {
    if (sign.value === "") {
        numberAElement.value = numberAElement.value + ".";
    } else {
        numberBElement.value = numberBElement.value + ".";
    }
}

function addAdd() {
    sign.value = "+";
}

function addMinus() {
    sign.value = "-";
}

function addDivide() {
    sign.value = "/";
}

function addMulti() {
    sign.value = "X";
}

function addModulse() {
    sign.value = "%";
}

function addResto() {
    sign.value = "^";
}

function addPop() {
    if (numberBElement.value === "") {
        if (sign.value !== "") {
            sign.value = "";
        } else {
            numberAElement.value = numberAElement.value.slice(0, -1);
        }
    } else {
        numberBElement.value = numberBElement.value.slice(0, -1);
    }
}

function giveResult() {
    let a = parseFloat(numberAElement.value);
    let b = parseFloat(numberBElement.value);
    let d = 0;
    if (sign.value === "+") {
        d = a + b;
    } else if (sign.value === "-") {
        d = a - b;
    } else if (sign.value === "X") {
        d = a * b;
    } else if (sign.value === "/") {
        d = a / b;
    } else if (sign.value === "%") {
        d = a * (b / 100);
    } else if (sign.value === "^") {
        d = a ** b;
    }
    resultGot.value = d;
}

function reSet() {
    numberAElement.value = "";
    numberBElement.value = "";
    resultGot.value = "";
    sign.value = "";
}