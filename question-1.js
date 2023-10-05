function lowerCaseWords(inputArray) {
  return new Promise((resolve, reject) => {
    const lowerCaseWordsArray = inputArray
      .filter((item) => typeof item === "string")
      .map((item) => item.toLowerCase());

    if (lowerCaseWordsArray.length > 0) {
      resolve(lowerCaseWordsArray);
    } else {
      reject(new Error("No lowercase words found in the input array."));
    }
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));