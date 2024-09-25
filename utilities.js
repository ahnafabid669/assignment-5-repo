function inputFieldById(id) {
    const addMoney = document.getElementById(id).value;
    const newAddMoney = parseFloat(addMoney);
    return newAddMoney;
}

function textFieldById(id) {
    const balance = document.getElementById(id).innerText;
    const newBalance = parseFloat(balance);
    return newBalance;
}