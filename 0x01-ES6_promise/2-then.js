function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'Success' };
    })
    .catch(() => {
      console.log('Failed to get a response from the API');
      return new Error();
    });
}
export default handleResponseFromAPI;
