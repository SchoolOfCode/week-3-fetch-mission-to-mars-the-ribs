// First, register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js"
      );
      console.log("ServiceWorker registration successful:", registration.scope);
    } catch (error) {
      console.error("ServiceWorker registration failed:", error);
    }
  });
}

// async function so that we can use the await keyword
async function submitCode() {
  try {
    // Your investigation code should go here
    // Leave your lines of code in when you find something out, so that you can always come back to it and see how you got there
    const response = await fetch("/api/logs");
    const data = await response.json();
    console.log(data);


    const personelid = await fetch("/api/personnel/2");
    const idData = await personelid.json();
    console.log(idData);
//This endpoint accepts the following query parameter: to (required) - searches using which personnel id sent the message; returns all messages sent by the relevant person.


    const messagesApi = await fetch("/api/messages?to=3");
    const messageData = await messagesApi.json();
   console.log(messageData);

   const hintApi = await fetch("/api/hint");
   const hintData = await hintApi.json();
  //console.log(hintData);


  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Wait for service worker to be ready before making requests
navigator.serviceWorker.ready
  .then(() => {
    submitCode();
  })
  .catch((error) => {
    console.error("Service Worker not ready:", error);
  });

  /*id 1 to id 4  = carrot
  id 2= not message
date
: 
"20/09/3005"
from
: 
4
message
: 
"Have you seen my glasses?"
subject
: 
"URGENT REQUEST - MISSION CRITICAL"
to: 3
date
: 
"21/09/3005"
from
: 
4
message
: 
"Never mind. Found them."
subject
: 
"URGENT UPDATE - MISSION CRITICAL"
to
: 
3
  
  */ 