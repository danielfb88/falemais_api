module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "ormconfig.js",
    "/tests/",
    "/node_modules/",
    "/src/migrations/",
    "/src/models/",
    "/src/helpers/schema-validator.ts",
    "/src/helpers/translate.ts",
    "/src/helpers/sentry.ts",
    "/src/helpers/elasticsearch.ts",
    "/src/helpers/env.ts",
    "/src/errorHandlerApi.ts",
    "/src/errors/",
  ],
  coverageReporters: ["json-summary", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  modulePaths: ["<rootDir>/src/"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts?(x)"],
};
