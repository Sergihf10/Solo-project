const apiService = {};

apiService.getUserInfo = (email) => {
  return fetch(`http://localhost:4000/users/${email}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

apiService.getAppointmentInfo = (email) => {
  return fetch(`http://localhost:4000/appointments/${email}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};



export default apiService;
