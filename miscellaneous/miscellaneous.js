
function check(id_value) {
    console.log(document.getElementById(id_value).checked);
   return document.getElementById(id_value).checked == true;
}


const nextPage = () => {
    const img = document.getElementById("img").value;
    myHobbies = "";
    check("hobbie_Chess") ? myHobbies + "Chess ": myHobbies ;
    check("hobbie_Movies") ? myHobbies + "Movies ": myHobbies ;
    check("hobbie_Sport") ? myHobbies + "Sport ": myHobbies ;
    check("hobbie_cars") ? myHobbies + "Cars ": myHobbies ;
    check("hobbie_dolls") ? myHobbies + "Dolls ": myHobbies;
    if (validFeilds(img)) {
        console.log(img);
        console.log(myHobbies);
      addToLocalStorege(img,myHobbies);
      getNextPage();
    }
  };
  const validFeilds = (img) => {
      if (!validUrlPhoto(img)) {
          document.getElementById("photo-error").innerText = 'error, please enter imge url'
          return false;
      } 
      return true
  }
  const addToLocalStorege = (imag,myHobbies) => {
    addItem("img", imag);
    addItem("hobbies",myHobbies);
  };
  