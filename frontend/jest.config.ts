import nextJest from "next/jest"

const createJestConfig = nextJest({
  dir: './',
})

const jestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(jestConfig)
