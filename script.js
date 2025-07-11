let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtm");
let turn = true; // true for O, false for X

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(box.innerText !== "") return; // Prevent overwrite
        
        if(turn){
            box.innerText = "O";
            turn = false;
            if(box.innerText==="O"){
                box.style.color="red";
            }else{
                box.style.color="green";
            }
        } else {
            box.innerText = "X";
            turn = true;
             if(box.innerText==="O"){
                box.style.color="red";
            }else{
                box.style.color="green";
            }
        }

        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for(let pattern of winpattern){
        let pv1 = boxes[pattern[0]].innerText;
        let pv2 = boxes[pattern[1]].innerText;
        let pv3 = boxes[pattern[2]].innerText;

        if(pv1 !== "" && pv1 === pv2 && pv2 === pv3){
            showWinner(pv1);
            disableAllBoxes();
            return;
        }
    }
};

const showWinner = (winner) => {
   alert(`Winner is ${winner}`);
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

reset.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
  
    turn = true;
});

