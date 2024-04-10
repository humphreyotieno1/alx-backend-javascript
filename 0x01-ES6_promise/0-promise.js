function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Success');
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
export default getResponseFromAPI;
