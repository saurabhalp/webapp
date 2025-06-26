// jest.setup.js

module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};



