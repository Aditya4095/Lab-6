// jest.config.js
export default {
  testEnvironment: 'jsdom',
  // Add this to mock CSS imports
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  },
  setupFiles: ['./jest.setup.js']
};
