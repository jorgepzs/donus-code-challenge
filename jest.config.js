/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  bail: true,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  coverageProvider: "v8",

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnssv: ["./src/tests/setup.js"],

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
};
