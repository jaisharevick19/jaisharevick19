let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var Name = document.getElementById("enterName").value;
   var Amount = parseInt(document.getElementById("enterAmount").value);

   if (Amount > 250000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = Name + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + Amount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - Amount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${Amount} is sent to ${Name}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${Amount} is sent to recepient with Email-id ${Name}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}
   