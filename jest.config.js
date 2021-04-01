module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/**/stories.tsx',
        '!src/pages/**/*.tsx',
        '!src/pages/**/*.ts',
        '!src/styles/**/*.ts',
        '!src/utils/apollo.ts',
        '!src/utils/apolloCache.ts',
        '!src/utils/protected-routes.ts',
        '!src/types/**/*.d.ts',
        '!src/graphql/**/*.ts',
        '!src/**/mock.ts'
    ],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
