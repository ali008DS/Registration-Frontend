
const axios = require('axios');

const API_URL = 'https://registration-backend-bxgt.onrender.com/api/auth/signup';

const testUser = {
    name: "Render Check",
    email: `rendercheck_${Date.now()}@example.com`,
    phone: "1231231234",
    password: "password123",
    country: "CheckLand"
};

console.log("Testing POST to:", API_URL);

axios.post(API_URL, testUser)
    .then(res => {
        console.log("✅ Success!");
        console.log("Status:", res.status);
        console.log("Data:", res.data);
    })
    .catch(err => {
        console.log("❌ Error!");
        if (err.response) {
            console.log("Status:", err.response.status);
            console.log("Data:", err.response.data);
        } else {
            console.log("Message:", err.message);
        }
    });
