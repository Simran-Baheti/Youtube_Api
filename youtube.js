import axios from 'axios';
const KEY = 'AIzaSyAmkpODzc_9N4jGMOVsVZSHDOuqBtabIx8'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 999999999,
        key: KEY
    }
})