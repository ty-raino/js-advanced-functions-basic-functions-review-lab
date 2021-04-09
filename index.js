function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
};

function wrapAdjective(str = "*") {
    return function(ad = 'special') {
        return `You are ${str}${ad}${str}!`
    }
}

const Calculator = {
    add: function (a, b) {
       return a + b;
    },

    subtract: function (a, b) {
        return a - b;
    },

    multiply: function (a, b) {
        return a * b;
    },

    divide: function (a, b) {
        return a / b;
    }
};

function actionApplyer(int, fns) {
    for (let i = 0; i < fns.length; i++) {
        int = fns[i](int);
    }
    return int
}

