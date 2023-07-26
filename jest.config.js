/** @type {import('jest').Config} */
module.exports = {
    setupFiles: ['./config/global.js'],
    transform:{
        '.js$': ['esbuild-jest']
    },
    moduleNameMapper: {
        'fixtures/(.*)': '<rootDir>/fixtures/$1'
      }
}