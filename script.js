function validateForm(event) {
    event.preventDefault(); // Stop page from reloading

    const name = document.getElementById('name').value;
    const dateInput = document.getElementById('resDate').value;
    const selectedDate = new Date(dateInput);
    const today = new Date();
    today.setHours(0,0,0,0); // Reset time for date comparison

    // Validation 1: Check if name is too short
    if (name.length < 3) {
        alert("Please enter a valid name.");
        return false;
    }

    // Validation 2: Check if date is in the past
    if (selectedDate < today) {
        alert("Error: You cannot pick a date in the past!");
        return false;
    }

    alert("Reservation Successful for " + name + "!");
    return true;
}