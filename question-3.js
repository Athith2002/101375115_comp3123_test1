const fs = require("fs").promises;
const path = require("path");

// Function to remove files and directory
async function removeLogsDirectory() {
  const logsDirectoryPath = path.join(__dirname, "Logs");

  try {
    // Check if the Logs directory exists
    if (await fs.stat(logsDirectoryPath)) {
      // Read the directory and get file names
      const files = await fs.readdir(logsDirectoryPath);

      // Output the file names to delete
      for (const file of files) {
        console.log(`Deleting file... ${file}`);
        await fs.unlink(path.join(logsDirectoryPath, file)); // Remove each file
      }

      // Remove the Logs directory itself
      await fs.rmdir(logsDirectoryPath);
    } else {
      console.log("Logs directory does not exist.");
    }
  } catch (error) {
    console.error("Error removing Logs directory:", error);
  }
}

async function createLogFiles() {
  const logsDirectoryPath = path.join(__dirname, "Logs");

  try {
    if (!(await fs.stat(logsDirectoryPath)).isDirectory()) {
      await fs.mkdir(logsDirectoryPath);
    }
    process.chdir(logsDirectoryPath);

    for (let i = 0; i < 10; i++) {
      const fileName = `log${i}.txt`;
      await fs.writeFile(fileName, `This is log file ${i}`);
      console.log(fileName);
    }
  } catch (error) {
    console.error("Error creating log files:", error);
  }
}
(async () => {
  await removeLogsDirectory();
  await createLogFiles();
})();
