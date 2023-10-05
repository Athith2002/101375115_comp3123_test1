const fs = require("fs");
const path = require("path");

// Function to remove files and directory
function removeLogsDirectory() {
  const logsDirectoryPath = path.join(__dirname, "Logs");

  // Check if the Logs directory exists
  if (fs.existsSync(logsDirectoryPath)) {
    // Read the directory and get file names
    const files = fs.readdirSync(logsDirectoryPath);

    // Output the file names to delete
    files.forEach((file) => {
      console.log(`delete files...${file}`);
      fs.unlinkSync(path.join(logsDirectoryPath, file)); // Remove each file
    });

    // Remove the Logs directory itself
    fs.rmdirSync(logsDirectoryPath);
  } else {
    console.log("Logs directory does not exist.");
  }
}

// Function to create log files
function createLogFiles() {
  const logsDirectoryPath = path.join(__dirname, "Logs");

  // Create the Logs directory if it does not exist
  if (!fs.existsSync(logsDirectoryPath)) {
    fs.mkdirSync(logsDirectoryPath);
  }

  // Change the current working directory to the Logs directory
  process.chdir(logsDirectoryPath);

  // Create 10 log files and write some text into each file
  for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    console.log(fileName);
  }
}

// Call the functions to remove and create log files
removeLogsDirectory();
createLogFiles();
