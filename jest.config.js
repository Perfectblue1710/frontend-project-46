export default {
  testEnvironment: 'node',

  
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    '^.+\\.js$': 'babel-jest',
  },

}
