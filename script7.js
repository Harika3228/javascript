// Task=-1 Order System(SetTimeOut)

console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 1000);

setTimeout(() => {
  console.log("Food ready");
}, 3000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);


// Task-2 Digital Clock(setinterval)

function getTime() {
  let now = new Date();
  return now.toLocaleTimeString();
}

// Start clock
let count = 0;

let clock = setInterval(() => {
  console.log(getTime());
  count++;

  if (count === 20) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 2000);

// LEVEL 2 - Intermediate(Callbacks+Async Thinking) 

// Task-3 Callback Hell Simulation 

function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts() {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 1000);
}
 // simulate callback hell
loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});

// LEVEL 3 - Promises (Rest API Logic)

// Task-4 Fake API Promise 

let apiUrl = "https://fakestoreapi.com/products/1"

fetch(apiUrl)
    .then(response => {
        if (!response.ok) { 
            throw new Error("API Failed");
        }   
        return response.json();
    })
    .then(data => {
        console.log("Product Data: ", data);
    })
    .catch(error => {
        console.error("Error: ", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });