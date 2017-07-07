class EntryApi {
  static requestHeaders() {
    return { AUTHORIZATION: `Bearer ${sessionStorage.jwt}` };
  }
  static getAllEntries() {
    const headers = this.requestHeaders();
    const path = window.location.pathname.split('/');
    const userId = path[1];
    const requestPath = `http://localhost:5000/api/users/${userId}/entries`;
    const request = new Request(requestPath, {
      method: 'GET',
      headers
    });
    return fetch(request).then((response) => {
      return response.json();
    }).catch((error) => {
      return error;
    });
  }
}

export default EntryApi;
