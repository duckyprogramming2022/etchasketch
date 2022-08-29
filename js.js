const etchPad = document.querySelector('.etchpad');

console.log(etchPad.style.Width);

function createEtchPad() {
    let rows = 1;
        for (rows; rows <=16*16; rows++) {
            const para = document.createElement('p');
            etchPad.appendChild(para);
        };
};

function  defBoxSize() {
    const paras = document.querySelectorAll('p') 
    paras.forEach((para) => {
        console.log(para);
        para.style.boxSizing = "border-box";
        width = 960/16;
        para.style.width = `${960/16}px`;
        para.style.height = `${960/16}px`;
        para.style.margin = "0px";
        para.style.border = "1px solid lightgrey";
    });
};
