function display() {
  //retrive all data from storege.js
  fullName = getItembyKey("name");
  email = getItembyKey("email");
  birthDate = getItembyKey("birthDate");
  city = getItembyKey("city");
  street = getItembyKey("street");
  addressNumber = getItembyKey("number");
  img = getItembyKey("img");
  hobbies = getItembyKey("hobbies");

  //showing data
  document.getElementById("name").innerHTML = "Hello, " + fullName;
  document.getElementById("address").innerHTML =
    city + ", " + street + ", " + addressNumber;
  document.getElementById("email").innerHTML = email;
  document.getElementById("birthDate").innerHTML = birthDate;
  document.getElementById("hobbies").innerHTML = hobbies;
  document.getElementById("img").src = img;
}

display();
