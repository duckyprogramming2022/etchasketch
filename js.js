const etchPad = document.querySelector('.etchpad');
const input = document.querySelector('input');
const btn1 = document.querySelector('#create')

function createEtchPad() {
    if (etchPad.childNodes.length > 0) {
        while (etchPad.firstChild) {
            etchPad.removeChild(etchPad.firstChild);
        }
    } 
    let gridCount = input.value;
    let rows = 1;
    for (rows; rows <=gridCount*gridCount; rows++) {
        const para = document.createElement('p');
        etchPad.appendChild(para);
    };
    defBoxSizeStyle()
    };

function  defBoxSizeStyle() {
    let gridCount = input.value;
    let gridSize = 960/gridCount;
    etchPad.style.border = "2px solid black";
    etchPad.childNodes.forEach((para) => {
            para.style.boxSizing = "border-box";
            para.style.width = `${gridSize}px`;
            para.style.height = `${gridSize}px`;
            para.style.margin = "0px";
            para.style.border = "1px solid lightgrey";
            para.addEventListener(('mouseover'), () => para.style.backgroundColor = "red");
        });
};

function restart() {
    etchPad.childNodes.forEach(para => para.style.backgroundColor = "white");
}