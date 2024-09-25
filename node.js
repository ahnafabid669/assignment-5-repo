

document.getElementById('btn-donate').addEventListener('click', function(event) {
    event.preventDefault();

    const newAddMoney =  inputFieldById('inputField');


    // const addMoney = document.getElementById('inputField').value;
    // const newAddMoney = parseFloat(addMoney);

   
    if (newAddMoney >= 0) {


        const newDonateBalance = textFieldById('donate-balance'); 

//  const donateBalance = document.getElementById('donate-balance').innerText;
//     const newDonateBalance = parseFloat(donateBalance);


const newMainBalance = textFieldById('main-balance');

    // const mainBalance = document.getElementById('main-balance').innerText;
    //   const newMainBalance = parseFloat(mainBalance);

     if (newAddMoney <= newMainBalance) {
           
    const updatedDonateBalance =
    newDonateBalance + newAddMoney;
     const updatedMainBalance =
            newMainBalance - newAddMoney;

           
 document.getElementById('donate-balance').innerText = updatedDonateBalance;
     document.getElementById('main-balance').innerText = updatedMainBalance;

        } else {
            alert('Donation amount exceeds the main balance.');
        }
    } else {
        alert('Invalid donation amount. Please enter a value greater than 0.');
    }
});


