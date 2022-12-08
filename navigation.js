const pagesPath = {
  personal_details: "./personal-details/personal_details.html",
  address: "./address/address.html",
  miscellaneous: "./miscellaneous/miscellaneous.html",
  summary: "./summary/summary.html"
};
const pagesPathKeys =Object.keys(pagesPath);

const getNextPage = (currentPage) => {
    const indexofPreviousPage = pagesPathKeys.indexOf(currentPage)+1;
    if(indexofPreviousPage<pagesPathKeys.length){
        window.location.href=pagesPath[pagesPathKeys[indexofPreviousPage]];
    }
};
const getPreviousPage = (currentPage) => {
    const indexofPreviousPage = pagesPathKeys.indexOf(currentPage)-1;
    if(indexofPreviousPage>=0){
        window.location.href=pagesPath[pagesPathKeys[indexofPreviousPage]];
    }
    
};