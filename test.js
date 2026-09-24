
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

console.log("Running tests...");

// Test 1
if (html.includes('id="name"')) {
    console.log("Test 1 Passed: Name field exists");
} else {
    console.log("Test 1 Failed: Name field is missing");
    process.exit(1);
}

// Test 2
if (html.includes('id="email"')) {
    console.log("Test 2 Passed: Email field exists");
} else {
    console.log("Test 2 Failed: Email field is missing");
    process.exit(1);
}

// Test 3
if (html.includes('id="course"')) {
    console.log("Test 3 Passed: Course field exists");
} else {
    console.log("Test 3 Failed: Course field is missing");
    process.exit(1);
}

// Test 4 - intentionally failed test
if (html.includes('id="phone"')) {
    console.log("Test 4 Passed: Phone field exists");
} else {
    console.log("Test 4 Failed: Phone field is missing");
    process.exit(1);
}


