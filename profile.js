// Task 1: Create the Profile
const userProfile = [
    "Alex Johnson", // User Name
    28,             // Age
    true,          // Subscription Status (true = active, false = inactive)
    "New York, USA", // User's Location
    ["Reading", "Cycling"] // User's Hobbies
];

// Task 2: Access and Log Profile Details
console.log("User Name:", userProfile[0]); // Accessing name
console.log("Second Hobby:", userProfile[4][1]); // Accessing second hobby

// Task 3: Modify the Profile
userProfile[1] = 29; // Updating age
userProfile[4].push("Gaming"); // Adding a new hobby

// Task 4: Display the Updated Profile
console.log("Updated Profile:", userProfile);
