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
    if (!required(cityName)) {
        document.getElementById("city-error").innerText = 'error, city name is required'
        return false;
    } else if(!maxLength(cityName, MAXLENGTH)){
        document.getElementById("city-error").innerText = `error, max length is ${MAXLENGTH}`
        return false;
    }
    if (!required(streetName)) {
        document.getElementById("city-error").innerText =''
        document.getElementById("street-error").innerText = 'error, street name is required'
        return false;
    } else if(!maxLength(streetName, MAXLENGTH)) {
        document.getElementById("city-error").innerText =''
        document.getElementById("street-error").innerText = `error, max length is ${MAXLENGTH}`
        return false;
    }
    return true
}
const addToLocalStorege = (cityName, streetName, homeNumber) => {
  addItem("city", cityName);
  addItem("street", streetName);
  addItem("number", homeNumber);
};
