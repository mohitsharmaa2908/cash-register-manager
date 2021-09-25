# Cash Register Manager

## List of Contents
- Description
- Input
- Output
- Processing
- Screenshots
- Link 

> **Description:**  Ever encountered situation where have to return change with least number of notes(denominations) against bill amount instantly, then this app will help, enter bill amount and cash given, and get to know least number of notes to return(in table format). This app works on indian currency system. Click on the link below to check least number of notes to return.

<br>

> **Input:** User has to enter bill amount and cash given to check number of notes to return. A user cannot pass any of the inputs empty, zero, negative and floating-point, if does then user is informed with desired message. User entered cash given has to be greater than or equal to entered bill amount, if not then user is informed with the appropriate message.

<br>

> **Output:** User will get to know number of notes to return in table format starting from note 2000, 500, 100, 20, 10, 5 to note 1 according to indian currency system. In Mobile devices output table will be displayed in vertical direction as number of rows will become column and column will become rows.

<br>

> **Processing:**
- Get bill amount from the user and check for input constraints such as not empty, not zero, not negative and not floating point.
- After that user has to click on `Next` button, then function `nextBtnListener` is called which checks for input constraints on bill amount using function `check amount` then the `Check Cash` button is toggled and `Next` button hidden.
- Get cash given from the user and check for input constraints such as not empty, not zero, not negative and not floating point.
- After that user has to click on `Check Cash` button, then function `checkBtnListener` is called which checks for input constraints on bill amount using function `check amount` then amount to be returned is calculated and then function `calculateChange` is called which calculates least number of notes to be returned and with the help of helper function it displays return change table.
- On error message `return change table` is hidden and on reload `Check Cash` button is hidden.

<br>

> **Screenshots:**

![App home page ](https://github.com/shmbajaj/cash-register-manager/blob/main/screenshots/home.png?raw=true)
![User entered bill amount and clicked on next button](https://github.com/shmbajaj/cash-register-manager/blob/main/screenshots/io_bill.png?raw=true)
![User eneterd cash given anc clicke on check cash button](https://github.com/shmbajaj/cash-register-manager/blob/main/screenshots/io_cash.png?raw=true)
![Input constraint voilated, cash amount cannot be floating point number](https://github.com/shmbajaj/cash-register-manager/blob/main/screenshots/message_error_1.png?raw=true)
![Input constraint voilated, bill amount cannot be zero](https://github.com/shmbajaj/cash-register-manager/blob/main/screenshots/message_error_2.png?raw=true)

<br>

> **Link:** [Cash Register Manager](https://cash-rm.netlify.app/)

