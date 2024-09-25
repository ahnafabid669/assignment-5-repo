
function inputFieldById(id){
    const addMoney = document.getElementById(id).value;
    const newAddMoney = parseFloat(addMoney);
    return newAddMoney;
}

function textFieldById(id){
    const donateBalance = document.getElementById(id).innerText;
    const newDonateBalance = parseFloat(donateBalance);
    return newDonateBalance ;
}

console.log('hello :', newAddMoney)