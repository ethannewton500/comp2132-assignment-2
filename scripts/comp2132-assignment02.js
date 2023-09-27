/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN = 30;
const minimumAgeToAttend = 21;
/* tax rate is 10%, defined here as 0.10 */
const taxRate = 0.1;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName = "Shania Smith";
const age = "21";
const cashOnHandDollarsCDN = "320";
const quantityOfTickets = "3";

const userNameHeading = document.getElementById("username");
let replacedUserHeading = userNameHeading.innerHTML + userName;
userNameHeading.innerHTML = replacedUserHeading;

const percentageRate = taxRate * 100 + "%";

let newFamousQuote = userName + " says: " + '"I can\'t wait for the show!"';

let beforeTaxCost;
let afterTaxCost;

let purchaseOutcome;

beforeTaxCost = quantityOfTickets * ticketCostDollarsCDN;
afterTaxCost = beforeTaxCost + beforeTaxCost * taxRate;

document.getElementById("userDataAge").innerHTML = age;
document.getElementById("userDataQuantity").innerHTML = quantityOfTickets;
document.getElementById("userDataCashCad").innerHTML += cashOnHandDollarsCDN;

document.getElementById("concertDataAge").innerHTML = minimumAgeToAttend;
document.getElementById("concertDataCost").innerHTML += ticketCostDollarsCDN;
document.getElementById("concertDataTax").innerHTML = percentageRate;

document.getElementById("famousQuote").innerHTML = newFamousQuote;

document.getElementById("beforeTaxCost").innerHTML += beforeTaxCost;
document.getElementById("afterTaxCost").innerHTML += afterTaxCost;

if (
	quantityOfTickets * ticketCostDollarsCDN + quantityOfTickets * ticketCostDollarsCDN * taxRate <=
	cashOnHandDollarsCDN
) {
	document.getElementById("affordMessage").innerHTML = "You are able to afford the tickets!";
} else {
	document.getElementById("messageBad").innerHTML += "You are not able to afford the tickets!<br><br>";
}

if (age > minimumAgeToAttend) {
	document.getElementById("ageMessageGood").innerHTML = "You are more than old enough to attend the concert!";
	purchaseOutcome = true;
} else if (age == minimumAgeToAttend) {
	document.getElementById("ageMessageGood").innerHTML = "You are the exact age to attend the concert!";
	purchaseOutcome = true;
} else {
	document.getElementById("messageBad").innerHTML +=
		"You are too young to attend the concert by " + (minimumAgeToAttend - age) + " years!";
	purchaseoutcome = true;
}

if (purchaseOutcome == true) {
	document.getElementById("purchaseOutcome").innerHTML = "Congratulations we were able to process your purchase!";
} else {
	document.getElementById("purchaseOutcome").innerHTML =
		"OOPS you did not meet the requrements for purchasing for the following reasons:";
}
