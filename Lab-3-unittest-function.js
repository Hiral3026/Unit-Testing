//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number (n or N followed by 8 digits).
 * Returns true if input validates, otherwise returns false.
 * @param {string} idIn
 */



function checkHumbrId(id) {
    // Regular expression for validating Humber college ID
    const idRegex = /^[Nn]\d{8}$/;
  
    // Test the input against the regex
    return idRegex.test(id);
  }
  
  // Example usage:
  const isValidId = checkHumbrId('N12345678');
  console.log(isValidId);  // Output: true
  
  const invalidId = checkHumbrId('X98765432');
  console.log(invalidId);  // Output: false
  
