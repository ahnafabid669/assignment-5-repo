

document.getElementById('btn-donate').addEventListener('click', function(event) {
    event.preventDefault();

    
    const addMoney = document.getElementById('inputField').value;
    const newAddMoney = parseFloat(addMoney);

   
    if (newAddMoney >= 0) {

       const donateBalance = document.getElementById('donate-balance').innerText;
    const newDonateBalance = parseFloat(donateBalance);


    const mainBalance = document.getElementById('main-balance').innerText;
        const newMainBalance = parseFloat(mainBalance);

     if (newAddMoney <= newMainBalance) {
           
            const updatedDonateBalance = newDonateBalance + newAddMoney;
            const updatedMainBalance = newMainBalance - newAddMoney;

           
 document.getElementById('donate-balance').innerText = updatedDonateBalance;
            document.getElementById('main-balance').innerText = updatedMainBalance;

            console.log("Updated Donate Balance: ", updatedDonateBalance);
            console.log("Updated Main Balance: ", updatedMainBalance);
        } else {
            alert('Donation amount exceeds the main balance.');
        }
    } else {
        alert('Invalid donation amount. Please enter a value greater than 0.');
    }
});


