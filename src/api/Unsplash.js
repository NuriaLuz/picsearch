import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e4d40704ad373cba1cbd7572f1fa154067833acfc4510343ea2ccd23e34cd9f7'
      }
});