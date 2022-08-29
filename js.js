const etchPad = document.querySelector('.etchpad');
 

etchPad.addEventListener('mouseover')

function createEtchPad() {
    let rows = 1;
        for (rows; rows <=16*16; rows++) {
            const para = document.createElement('p');
            etchPad.appendChild(para);
        };
    const paras = document.querySelectorAll('p')
    defBoxSize(paras);
    defBoxStyle(paras);
};

function  defBoxSize(paras) {
        paras.forEach((para) => {
            console.log(para);
            para.style.boxSizing = "border-box";
            para.style.width = `${960/16}px`;
            para.style.height = `${960/16}px`;
        });
};

function defBoxStyle(paras) {
        paras.forEach((para) => {
            para.style.margin = "0px";
            para.style.border = "1px solid lightgrey";
        });
};
