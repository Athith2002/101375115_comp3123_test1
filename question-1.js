// Create a function named lowerCaseWords
function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    // Use the filter() method to filter out non-strings and convert to lowercase
    const lowerCaseWordsArray = inputArray
      .filter((item) => typeof item === "string")
      .map((item) => item.toLowerCase());

    if (lowerCaseWordsArray.length > 0) {
      // If there are lowercase words, resolve the promise with the array
      resolve(lowerCaseWordsArray);
    } else {
      // If there are no lowercase words, reject the promise with an error message
      reject(new Error("No lowercase words found in the input array."));
    }
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
