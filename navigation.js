const pagesPath = {
    splash_screen: "../register-wizard/splash-screen/splash-screen.html",
    personal_details: ".././personal-details/personal_details.html",
    address: ".././address/address.html",
    miscellaneous: ".././miscellaneous/miscellaneous.html",
    summary: ".././summary/summary.html"
};
const pagesPathKeys = Object.keys(pagesPath);

const getNextPage = (currentPage) => {
    const indexofNextPage = pagesPathKeys.indexOf(currentPage) + 1;
    if (indexofNextPage < pagesPathKeys.length) {
        window.location.href = pagesPath[pagesPathKeys[indexofNextPage]];
    }
};
const getPreviousPage = (currentPage) => {
    const indexofPreviousPage = pagesPathKeys.indexOf(currentPage) - 1;
    if (indexofPreviousPage >= 0) {
        window.location.href = pagesPath[pagesPathKeys[indexofPreviousPage]];
    }

};