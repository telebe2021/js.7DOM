document.addEventListener('DOMContentLoaded', function () {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const ageInput = document.getElementById('age');
    const addButton = document.getElementById('addButton');
    const dataTableBody = document.querySelector('#dataTable tbody');
  
    addButton.addEventListener('click', function () {
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const age = ageInput.value.trim();
  
      if (firstName !== '' && lastName !== '' && age !== '') {
        addRowToTable(firstName, lastName, age);
        clearInputs();
      } else {
        alert('Ad, Soyad və Yaş doldurulmalidir.');
      }
    });
  
    function addRowToTable(firstName, lastName, age) {
      const newRow = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const lastNameCell = document.createElement('td');
      const ageCell = document.createElement('td');
  
      firstNameCell.textContent = firstName;
      lastNameCell.textContent = lastName;
      ageCell.textContent = age;
  
      newRow.appendChild(firstNameCell);
      newRow.appendChild(lastNameCell);
      newRow.appendChild(ageCell);
  
      dataTableBody.appendChild(newRow);
    }
  
    function clearInputs() {
      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
    }
  });
  