class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:5000/api/login',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          username: credentials.email,
          password: credentials.password
        })
      });
    return fetch(request).then((response) => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }
}

export default SessionApi;
