module.exports = {
    moduleFileExtensions: ['js', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/components/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: [
        '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
        '**/__tests__/*.(js|jsx|ts|tsx)'
    ],
    testURL: 'http://localhost/',
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '<rootDir>/src/components**/*.vue',
        '!**/node_modules/**'
    ]
};