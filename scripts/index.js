const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#message");
const checkBtn = document.querySelector("#check");
const table = document.querySelector(".change-table");
const numOFRows = document.querySelectorAll(".number-of-notes");
const nextBtn = document.querySelector("#next");
const labelCashSection = document.getElementById("cash-label");

const notes = [2000,500,100,20,10,5,1];

function toggleNotesTable(value){
    table.style.display = value;
}

function toggleCashSection(value){
    labelCashSection.style.display = value;
    cashGiven.style.display = value;
    checkBtn.style.display = value;
}

function hideMessage(){
    // message.innerText="";
    message.style.display="none";
}

function updateMessage(msg){
    message.style.display="block";
    message.innerText = msg;
}

function updateTable(numOFNotes){

    numOFRows.forEach( (row,index) => {
            row.innerText = "";
            if(numOFNotes[index] > 0){
                row.innerText = numOFNotes[index];
            }
    });

    toggleNotesTable("block")
}

function calculateChange(amount){
    console.log("inside calculate change",{amount});
    let difference = amount;
    let numOFNotes = [0,0,0,0,0,0,0];

    notes.forEach( (note,index) => {
        
        if(difference >= note){
            let c_amt = 0;
            let numberOFNotes = Math.trunc(difference/note);
            // console.log(numberOFNotes,note,index);
            c_amt = note * numberOFNotes;
            difference -= c_amt;
            numOFNotes[index] = numberOFNotes;
        }

    })

    updateTable(numOFNotes);
}

function checkBtnListener(){

    let bill = Number(billAmount.value);
    
    if(cashGiven.style.display === "block"){
        let cash = cashGiven.value;
        console.log({bill},{cash});

        if(cash>=bill){
            cash = Number(cash);
            let amtToBeReturned = cash - bill;
            hideMessage();
            calculateChange(amtToBeReturned);
        }else{
            if(cash === ""){
                updateMessage("Cash amount cannot be empty, must be a number.")
            }else if(!Number.isInteger(cash) && cash !== "0"){
                updateMessage("Cash amount cannot be words, must be a number.");
            }else{
                updateMessage("Cash provided must be atleast equal to bill amount.")
            }
        }
    }

}

function nextBtnListener(){
    hideMessage();
    let bill = billAmount.value;
    if(bill > 0){
        toggleCashSection("block");
    }else{
        if(bill === ""){
            updateMessage("Bill amount cannot be empty, must be a number.")
        }else if(!Number.isInteger(bill) && bill !== "0"){
            updateMessage("Bill amount cannot be words, must be a number.");
        }else{
            updateMessage("Bill amount must be greater than zero.")
        }
    }
}

toggleCashSection("none");
toggleNotesTable("none");
checkBtn.addEventListener("click",checkBtnListener);
nextBtn.addEventListener("click",nextBtnListener);