const path = require('path')
const getJestMappersFromTSConfig = require('tsconfig-paths-jest-mapper')
const moduleNameMapper = getJestMappersFromTSConfig(path.resolve(__dirname, './tsconfig.paths.json'))
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup-tests.ts'],
  setupFiles: ['<rootDir>/test/match-media.mock.ts', '<rootDir>/test/jest-setup.ts'],
  testMatch: ['**/*.test.ts?(x)'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/cypress'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/test/svgr.mock.tsx',
    '\\.(css|scss)$': 'identity-obj-proxy',
    ...moduleNameMapper,
  },
}
