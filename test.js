
// Student Feedback Application Test

console.log("Running tests...");

// Test 1: Name field exists
let nameField = document.getElementById("name");

if (nameField) {
    console.log("Test 1 Passed: Name field exists");
} else {
    console.log("Test 1 Failed: Name field is missing");
}

// Test 2: Email field exists
let emailField = document.getElementById("email");

if (emailField) {
    console.log("Test 2 Passed: Email field exists");
} else {
    console.log("Test 2 Failed: Email field is missing");
}

// Test 3: Course field exists
let courseField = document.getElementById("course");

if (courseField) {
    console.log("Test 3 Passed: Course field exists");
} else {
    console.log("Test 3 Failed: Course field is missing");
}

// Test 4: Wrong test - intentionally fails
let wrongField = document.getElementById("phone");

if (wrongField) {
    console.log("Test 4 Passed");
} else {
    console.log("Test 4 Failed: Phone field is missing");
}

