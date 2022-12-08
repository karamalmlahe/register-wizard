const next = () => {
    const fullName = document.getElementById("full_name").value
    const email = document.getElementById("email").value
    const birthDate = document.getElementById("birth_date").value
    if (validPersonalDetails(fullName, email, birthDate))
        getNextPage();




}
const validPersonalDetails = (fullName, email, birthDate) => {
    const MAXLENGTH = 20;
    if (!required(fullName) || !maxLength(fullName, maxLength)) {
        document.getElementById("fullName-error").innerText = "error";
        return false;
    }
    if (!required(email) || !validEmail(email)) {
        document.getElementById("email-error").innerText = "error";
        return false;
    }
    if (!required(birthDate) || !validBirthDate(birthDate)) {
        document.getElementById("birthDate-error").innerText = "error";
        return false;
    }

    if (!validFullName(fullName))
        return false;
    else
        validEmail(email);
    validBirthDate(birthDate);


}






