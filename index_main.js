var CentralStorage = {};

var DiaryState = "";

function saveCentralStorage() {
    localStorage.setItem("MyCentralStorage", JSON.stringify(CentralStorage));
}

if (localStorage.getItem("MyCentralStorage") === null) {
    saveCentralStorage();
} else {
    CentralStorage = JSON.parse(localStorage.getItem("MyCentralStorage"));
}

function S(id) { return document.getElementById(id); }


function hideOrShowElements(state) {
    var allSelectedElements = {
        'DiaryLoginDiv': 'block',
        'DiaryPasswordInput': 'block',
        'DiarySetPasswordInput': 'block',
        'DiarySetPasswordButton': 'block'
    };


    for (var elem in allSelectedElements) {
        S(elem).style.display = 'none';
    }

    var allSelectedElementsVisibleState = {
        'SetPassword': ['DiaryLoginDiv', 'DiarySetPasswordInput', 'DiarySetPasswordButton'],
        'UnlockDiary' : ['DiaryLoginDiv', 'DiaryPasswordInput']
    };

    allSelectedElementsVisibleState[state].forEach(function (elem) {
        S(elem).style.display = allSelectedElements[elem];
    });
}

hideOrShowElements("UnlockDiary");


