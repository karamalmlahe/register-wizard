const nextPage = () => {
    const cityName = document.getElementById("city").value
    const streetName = document.getElementById("street")
    const homeNumber = document.getElementById("home-number")
    const MAXLENGTH = 20;
    console.log(required('sadhk'));
    if (!required(cityName) && !required(streetName)) {
        console.log('karam');
        if (maxLength(cityName, MAXLENGTH) && maxLength(streetName, MAXLENGTH))
            addToLocalStorege(cityName, streetName, homeNumber)
            getNextPage()
    }

}
const addToLocalStorege = (cityName, streetName, homeNumber) => {
    addItem('cityName', cityName)
    addItem('streetName', streetName)
    addItem('homeNumber', homeNumber)
}