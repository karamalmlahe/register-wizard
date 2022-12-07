const getItemByKey = (key) => {
  return localStorage.getItem(key);
};
const removeItem = (key) => {
  localStorage.removeItem(key);
};
const addItem = (key, value) => {
  localStorage.setItem(key, value);
};
const isExist = (key) => {
  return key in localStorage;
};
