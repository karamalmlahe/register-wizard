const next = () => {
    const fullName = document.getElementById("full_name").value
    const email = document.getElementById("email").value
    const birthDate = document.getElementById("birth_date").value
    validFullName(fullName);
    validEmail(email);
    validBirthDate(birthDate);

}



