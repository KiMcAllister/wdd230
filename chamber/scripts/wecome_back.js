// Get the current date and time
const now = new Date();

// Check if the user has visited before and retrieve the last visit time from local storage
const lastVisit = localStorage.getItem('lastVisit');

// If there's a last visit time, use it to construct the welcome message
if (lastVisit) {
  // Convert the last visit time string to a Date object
  const lastVisitDate = new Date(lastVisit);

  // Calculate the time difference between the last visit and now, in milliseconds
  const timeDiff = now.getTime() - lastVisitDate.getTime();

  // Convert the time difference to minutes
  const minutesDiff = Math.floor(timeDiff / 60000);

  // Construct the welcome message with the last visit time and minutes since last visit
  const welcomeMessage = `You last checked here ${lastVisitDate.toLocaleString()}, here are some updates (it's been ${minutesDiff} minutes since your last visit).`;

  // Set the innerHTML of the "welcome_back" element to the welcome message
  document.getElementById('welcome_back').innerHTML = welcomeMessage;
} else {
  // If there's no last visit time, just set the innerHTML of the "welcome_back" element to a generic welcome message
  document.getElementById('welcome_back').innerHTML = "Welcome, check out what's going on around town!";
}

// Save the current visit time to local storage for next time
localStorage.setItem('lastVisit', now.toString());
