const initialPrice = document.querySelector("#inital-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-change");
const outputBox = document.querySelector("#output-box");


function showMessage(msg, status) {
    if (status === "good") {
        outputBox.style.color = 'green';
        outputBox.innerText = msg;

    } else if (status === "bad") {
        outputBox.style.color = 'red';
        outputBox.innerText = msg;

    } else {
        outputBox.style.color = "black";
        outputBox.innerText = msg;

    }

}

function profitAndloss(ip, cp, q) {
    if (ip < cp) {
        var flag = "good";
        var profit = (cp - ip) * q;
        var profitDecimal = profit.toFixed(2);
        var profitPercentage = ((cp - ip) / ip) * 100;
        var message = "heyy the profit is " + profitDecimal + " and the profit percentage is " + profitPercentage.toFixed(2) + "%";




        return [message, flag]


    }
    if (ip > cp) {
        var flag = "bad";
        var loss = (ip - cp) * q;
        var lossDecimal = loss.toFixed(2);
        var lossPercentage = ((ip - cp) / ip) * 100;
        var message = "heyy the profit is " + lossDecimal + " and the profit percentage is " + lossPercentage.toFixed(2) + "%";

        return [message, flag]

    } else if (cp === ip) {
        var flag = "neutral"
        var message = "HODL...........................!"

        return [message, flag]

    }

}


function clickhandler() {
    var curr = currentPrice.value;
    var innP = initialPrice.value;
    var qty = quantity.value;

    if (curr > 0 && innP > 0 && qty > 0) {

        var [message, status] = profitAndloss(innP, curr, qty);
        showMessage(message, status)

    }
    else{
        outputBox.innerText = "enter all the fields and let them be > 0.";
    }


}

checkButton.addEventListener('click', clickhandler);