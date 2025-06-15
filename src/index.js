document.addEventListener('DOMContentLoaded', () => {
    displayGuests();
});




const form = document.getElementById('guest-form');
const guestNameInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');
const guestCategory = document.getElementById('guest-category');

let guests = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const guestName = guestNameInput.value.trim();
    const category = guestCategory.value;
    
    if (guests.length >= 10) {
    alert('Guest limit reached. You cannot add more than 10 guests.');
    return;
   }

    if (guestName === '') {
        alert('Please enter a guest name.');
        return;
    }

    if (guestName) {
        const guest = {
            name: guestName,
            category: category
        };
        guests.push(guest);
        displayGuests();
        form.reset();
    }});
    
function displayGuests() {
    guestList.innerHTML = '';
    guests.forEach((guest, index) => {
        const li = document.createElement('li');
        li.textContent = `${guest.name} (${guest.category})`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            guests.splice(index, 1);
            displayGuests();
        });
        li.appendChild(removeButton);
        guestList.appendChild(li);
    });
}
