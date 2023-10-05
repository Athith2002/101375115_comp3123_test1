const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Delayed success!' });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Error: Delayed exception!'));
    }, 500);
  });
};

const handlePromises = async () => {
  try {
    const resolvedResult = await resolvedPromise();
    console.log('Resolved Result:', resolvedResult);
  } catch (error) {
    console.error('Error in resolvedPromise:', error.message);
  }

  try {
    const rejectedResult = await rejectedPromise();
    console.log('This will not be reached because it is a rejected promise');
  } catch (error) {
    console.error('Error in rejectedPromise:', error.message);
  }
};

handlePromises();

