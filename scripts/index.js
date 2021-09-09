const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#message");
const checkBtn = document.querySelector("#check");
const table = document.querySelector(".change-table");
const numOFRows = document.querySelectorAll("#number-of-notes");

const notes = [2000,500,100,20,10,5,1];
let numOFNotes = [0,0,0,0,0,0,0];

function updateMessage(msg){
    message.style.Display="block";
    message.innerText = msg;
}

function updateTable(){
    numOFRows.forEach( (row,index) => {
            if(numOFNotes[index] > 0){
                row.innerText = numOFNotes[index];
            }
    });
}

function calculateChange(amount){
    console.log("inside calculate change",{amount});
    let difference = amount;


    notes.forEach( (note,index) => {
        
        if(difference >= note){
            let c_amt = 0;
            let numberOFNotes = Math.trunc(difference/note);
            console.log(numberOFNotes,note,index);
            c_amt = note * numberOFNotes;
            difference -= c_amt;
            
            numOFNotes[index] = numberOFNotes;
        }
    })

    updateTable();
}

function checkBtnListener(){
    message.style.Display="none";
    let bill = Number(billAmount.value);
    let cash = Number(cashGiven.value);

    if(bill > 0){
        
        if(cash >= bill){
                let amountToBeReturned = cash - bill;
                if(amountToBeReturned === 0){
                    updateMessage("No Notes to be returned");
                }else{
                    calculateChange(amountToBeReturned);
                }
        }else{
            updateMessage("Cash provided should be atleast equal to bill amount");
        }

    }else{
        updateMessage("Bill amount must be greater than zero.")
    }
}

checkBtn.addEventListener("click",checkBtnListener);