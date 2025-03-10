// Code your solution here
// Function 1: findMatching
function findMatching(drivers, name) {
    // Return all drivers whose name matches the string, case-insensitive
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  function fuzzyMatch(drivers, query) {
    // Return drivers whose names start with the provided query string
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function 3: matchName
  function matchName(drivers, name) {
    // Return driver objects where the name property matches the provided name
    return drivers.filter(driver => driver.name === name);
  }
  
  // Example Data
  
  // Array of driver names
  const drivers = ["Bobby", "Sam", "Danny", "bobby"];
  
  // Array of driver objects
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sam", hometown: "Los Angeles" },
    { name: "Danny", hometown: "Chicago" },
    { name: "Bobby", hometown: "San Francisco" }
  ];
  
  // Example Test Cases
  console.log("findMatching test:");
  console.log(findMatching(drivers, "bobby")); // Expected output: ["Bobby", "bobby"]
  
  console.log("\nfuzzyMatch test:");
  console.log(fuzzyMatch(drivers, "bo")); // Expected output: ["Bobby", "bobby"]
  
  console.log("\nmatchName test:");
  console.log(matchName(driverObjects, "Bobby")); 
  // Expected output: [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "San Francisco" }]
  