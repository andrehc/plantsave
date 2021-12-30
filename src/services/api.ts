import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://192.168.56.1:3333',
  baseURL: 'http://192.168.0.112:3333',
})

export default api;

/*
SERVIDOR DA API DE TESTES (api fake)
json-server ./src/services/server.json --host 192.168.0.112 --port 3333 --delay 700
*/