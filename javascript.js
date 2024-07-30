function isValidPAN(pan) {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panPattern.test(pan);
}

function validatePAN() {
    const panInput = document.getElementById('pan').value;
    
    if (isValidPAN(panInput)) {
        alert("Valid PAN Number");
        return true;
    } else {
        alert("Invalid PAN Number");
        return false;
    }
}