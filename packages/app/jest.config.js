
module.exports = {
  displayName: 'app',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {
    'ts-jest': {
      // Need to overrite jsx config to "react" when running tests
      tsConfig: '<rootDir>/tsconfig.jest.json'
    }
  },
  testMatch: [
    '<rootDir>/**/*.test.{ts,tsx}'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ]
}
