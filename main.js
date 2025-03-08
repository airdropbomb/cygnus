const axios = require('axios');

const url = 'https://i.cygnus.finance/api/user';

const headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.8',
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1HT1FOYWNITnJBZ2RSdVVUOVl2NTNtU0k3Y0gxVHVBOXJ0dERZbmlkS1EifQ.eyJzaWQiOiJjbTgwMHY2dXIwMTloY3ljeWFvd2VyZjlpIiwiaXNzIjoicHJpdnkuaW8iLCJpYXQiOjE3NDE0MjczMjQsImF1ZCI6ImNtN2Y3Y2E4bTAwM3cxMXZmdDE1Mnd6N2YiLCJzdWIiOiJkaWQ6cHJpdnk6Y204MDB2NndvMDE5amN5Y3lhNHJybWlzZCIsImV4cCI6MTc0MTQzMDkyNH0.8MEM6VofgvX-RlEa7Zb75M2GcSuYs6XFed4g1U4fSTa7PWlFci8apdrp4zmZAoCNOFszPqI2Eiuijxjw7PMnCA', // Token ကို ဒီနေရာမှာ ထည့်ပါ
    'origin': 'https://i.cygnus.finance',
    'referer': 'https://i.cygnus.finance/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
};

const data = {
    id: "did:privy:cm800v6wo019jcycya4rrmisd",
    power: 100,
    energy: 10,
    lastPlayAt: "2025-03-08T09:51:57.566Z"
};

axios.post(url, data, { headers })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
