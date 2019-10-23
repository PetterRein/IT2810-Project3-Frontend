const startingRequest = () => {
  return {
    type: "STARTING_REQUEST"
  }
}
const finishedRequest = (response) => {
  return {
    type: "FINISHED_REQUEST",
    response: response
  }
}

const getGraph = (payload) => {
  return dispatch => {
    dispatch(startingRequest());
    return new Promise(function(resolve, reject) {
      let request=new XMLHttpRequest();
      request.open("POST", process.env.REACT_APP_API_URL, true);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(payload));
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          resolve(request.responseText)
        }
      }
    }).then(response =>
            dispatch(finishedRequest(JSON.parse(response))))
  }
}

export default getGraph