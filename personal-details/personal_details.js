const next = () => {
    const fullName = document.getElementById("fullName").value
    const email = document.getElementById("email").value
    const birthDate = document.getElementById("birthDate").value
    if (validPersonalDetails(fullName, email, birthDate)) {
        addToLocalStorege(fullName, email, birthDate)
        getNextPage('personal_details');
    }




}
const validPersonalDetails = (fullName, email, birthDate) => {
    const MAXLENGTH = 20;
    if (!required(fullName)) {
        document.getElementById("fullName-error").innerText = 'Full name is required'
        return false
    } else if (!maxLength(fullName, MAXLENGTH)) {
        document.getElementById("fullName-error").innerText = `error, max length is ${MAXLENGTH}`
        return false
    }
    if (!required(email)) {
        document.getElementById("email-error").innerText = 'Email is required'
        return false
    } else if (!validEmail(email)) {
        document.getElementById("email-error").innerText = 'Email is not valid'
        return false
    }
    if (!required(birthDate)) {
        document.getElementById("birthDate-error").innerText = 'Birth Date is required'
        return false
    } else if (!validBirthDate(birthDate)) {
        document.getElementById("birthDate-error").innerText = 'Birth Date is not valid';
        return false;
    }
    return true
}

const addToLocalStorege = (fullName, email, birthDate) => {
    addItem("fullName", fullName);
    addItem("email", email);
    addItem("birthDate", birthDate);
};








