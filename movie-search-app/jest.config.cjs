module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(scss|css)$": "jest-transform-stub",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
