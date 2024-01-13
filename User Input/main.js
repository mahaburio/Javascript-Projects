

function createAcc(){
  const inputName = document.getElementById('inputName').value;
  const emailAddress = document.getElementById('emailAddress').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const newPassword = document.getElementById('newPassword').value;
  // const confirmPassword = document.getElementById('confirmPassword').value;
  
const tableBody = document.getElementById('tableBody');

const newRow = tableBody.insertRow(0);

const cellName = newRow.insertCell(0);
const cellEmail = newRow.insertCell(1);
const cellPhone = newRow.insertCell(2);
const cellPassword = newRow.insertCell(3);

cellName.innerHTML = inputName;
cellEmail.innerHTML = emailAddress;
cellPhone.innerHTML = phoneNumber;
cellPassword.innerHTML = newPassword;

}
