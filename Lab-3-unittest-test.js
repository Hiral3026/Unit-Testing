//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========

  

// Function to test
function test__checkHumbrId(value, expectedResult) {
    "use strict";
  
    var result = checkHumbrId(value);


    var output = document.getElementById("data");

    var style = result === expectedResult ? "color: green;" : "color: red;";
    var status = result === expectedResult ? "==PASSED==" : "xxFAILEDxx";

    output.innerHTML += `<p>Value tested: ${value} Expected result: ${expectedResult} <span style="${style}">${status}</span></p>`;
}

// Run tests
// Test-to-Pass
test__checkHumbrId("N12345678", true); // Should pass
test__checkHumbrId("n98765432", true); // Should pass

// Test-to-Fail
test__checkHumbrId("X12345678", false); // Should pass

// Boundary Values
test__checkHumbrId("N00000000", true); // Should pass (minimum digit boundary)
test__checkHumbrId("N99999999", true); // Should pass (maximum digit boundary)
test__checkHumbrId("n1234567", false);  // Should pass (less than 8 digits)
test__checkHumbrId("N123456789", false); // Should pass (more than 8 digits)
