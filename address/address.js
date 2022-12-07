const nextPage = () => {
  const cityName = document.getElementById("city").value;
  const streetName = document.getElementById("street").value;
  const homeNumber = document.getElementById("home-number").value;
  if (validFeilds(cityName, streetName)) {
    addToLocalStorege(cityName, streetName, homeNumber);
    getNextPage();
  }
};
const validFeilds = (cityName, streetName) => {
  const MAXLENGTH = 20;
  if (!required(cityName) || !maxLength(cityName, MAXLENGTH)) {
    document.getElementById("city-error").innerText = "error";
    return false;
  }
  if (!required(streetName) || !maxLength(streetName, MAXLENGTH)) {
    document.getElementById("street-error").innerText = "error";
    return false;
  }
  return true;
};
const addToLocalStorege = (cityName, streetName, homeNumber) => {
  addItem("city", cityName);
  addItem("street", streetName);
  addItem("number", homeNumber);
};
