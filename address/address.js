const nextPage = () => {
  const cityName = document.getElementById("city").value;
  const streetName = document.getElementById("street").value;
  const homeNumber = document.getElementById("home-number").value;
  clearErrors()
  if (validFeilds(cityName, streetName)) {
    addToLocalStorege(cityName, streetName, homeNumber);
    getNextPage('address')
  }
}
const backPage = () => {
  getPreviousPage('address')
}
const clearErrors = () => {
  document.getElementById("city-error").innerText = ''
  document.getElementById("street-error").innerText = ''

}
const validFeilds = (cityName, streetName) => {
  const MAXLENGTH = 20;
  let isValid = true
  if (!required(cityName)) {
    document.getElementById("city-error").innerText = 'error, city name is required'
    isValid = false;
  } else if (!maxLength(cityName, MAXLENGTH)) {
    document.getElementById("city-error").innerText = `error, max length is ${MAXLENGTH}`
    isValid = false;
  }
  if (!required(streetName)) {
    document.getElementById("street-error").innerText = 'error, street name is required'
    isValid = false;
  } else if (!maxLength(streetName, MAXLENGTH)) {
    document.getElementById("street-error").innerText = `error, max length is ${MAXLENGTH}`
    isValid = false;
  }
  return isValid
}
const addToLocalStorege = (cityName, streetName, homeNumber) => {
  addItem("city", cityName);
  addItem("street", streetName);
  addItem("number", homeNumber);
};
