import axios from 'axios';

const api = axios.create({
  baseURL: 'mongodb+srv://nguyennhathao11c2:Hao%407708801314520@cluster0.wq1pija.mongodb.net/?retryWrites=true&w=majority',
});

export {api}
