const etchPad = document.querySelector('.etchpad');

function createEtchPad() {
    let rows = 1;
        for (rows; rows <=16*16; rows++) {
            const para = document.createElement('p');
            etchPad.appendChild(para);
        };
    const paras = document.querySelectorAll('p')
    return paras;
};

function  defBoxSizeStyle() {
    etchPad.style.border = "2px solid black";
    etchPad.childNodes.forEach((para) => {
            console.log(para);
            para.style.boxSizing = "border-box";
            para.style.width = `${960/16}px`;
            para.style.height = `${960/16}px`;
            para.style.margin = "0px";
            para.style.border = "1px solid lightgrey";
            para.addEventListener(('mouseover'), () => para.style.backgroundColor = "red");
        });
};