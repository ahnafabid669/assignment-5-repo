
  document.getElementById('btn1-donate').addEventListener('click', function(event) {
    event.preventDefault();
    handleDonation('inputField1', 'donate1-balance', 'main-balance');
});


document.getElementById('btn2-donate').addEventListener('click', function(event) {
    event.preventDefault();
    handleDonation('inputField2', 'donate2-balance', 'main-balance');
});


document.getElementById('btn3-donate').addEventListener('click', function(event) {
    event.preventDefault();

    handleDonation('inputField3', 'donate3-balance', 'main-balance');
});

function handleDonation(inputFieldId, donateBalanceId, mainBalanceId) {
    const newAddMoney = inputFieldById(inputFieldId);

if (newAddMoney >= 0) {
  const newDonateBalance = textFieldById(donateBalanceId);
        const newMainBalance = textFieldById(mainBalanceId);

   if (newAddMoney <= newMainBalance) {
      const updatedDonateBalance = newDonateBalance + newAddMoney;
            const updatedMainBalance = newMainBalance - newAddMoney;
  document.getElementById(donateBalanceId).innerText = updatedDonateBalance;

     document.getElementById(mainBalanceId).innerText = updatedMainBalance;
    }
      else {
  alert('Donation amount exceeds the main balance.');
        }
 }

     
else {
 alert('Invalid donation amount. Please enter a value greater than 0.');
    }
}

document.getElementById('buttonHistory').addEventListener('click', function(){
    showSectionById('card-4');

});

