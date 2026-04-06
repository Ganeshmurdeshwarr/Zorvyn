import  userData  from "../data/userData"; 

export const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userData);
      reject("Error fetching data") 
    }, 1000);
  });
};
