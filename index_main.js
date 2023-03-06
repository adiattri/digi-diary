var CentralStorage = {};

var DiaryState = "";

function saveCentralStorage() {
    localStorage.setItem("MyCentralStorage", JSON.stringify(CentralStorage));
}

if (localStorage.getItem("MyCentralStorage") !== null) {
    CentralStorage = JSON.parse(localStorage.getItem("MyCentralStorage"));
}


var allSelectedElements = [
    'DiaryLoginDiv',
    'DiaryPasswordInput',
    'DiarySetPasswordInput',
    'DiarySetPasswordButton'
];

var allSelectedElementsDefaultDisplayValues = {};

allSelectedElements.forEach(function (elem) {
    allSelectedElementsDefaultDisplayValues[elem] = window.getComputedStyle(S(elem), null).getPropertyValue('display');
});

function S(id) { return document.getElementById(id); }
//kartik hello
//hy
//adii helloo
function hideOrShowElements(state) {
    allSelectedElements.forEach(function (elem) {
        S(elem).style.display = 'none';
    });

    var allSelectedElementsVisibleState = {
        'SetPassword': ['DiaryLoginDiv', 'DiarySetPasswordInput', 'DiarySetPasswordButton'],
        'UnlockDiary': ['DiaryLoginDiv', 'DiaryPasswordInput']
    };

    allSelectedElementsVisibleState[state].forEach(function (elem) {
        S(elem).style.display = allSelectedElementsDefaultDisplayValues[elem];
    });

}
hideOrShowElements("SetPassword");


