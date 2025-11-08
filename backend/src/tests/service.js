const axios = require('axios');

const data = {
  user: "672dcbf7e1a3a24a9c9a1b12",
  title: "Logo Design Service", 
  description: "Professional logo design with unlimited revisions.",
  imageURL: "https://images.unsplash.com/photo-1762568792352-f952c6a0a6cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
  keywords: ["design", "logo", "branding"],
  price: 49.99
};

axios.post('http://localhost:5000/api/v1/service/create', data, {
  headers: { 'Content-Type': 'application/json' }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error.response?.data || error.message);
});