
module.exports = {
  displayName: 'server',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/**/*.test.ts'
  ]
}
