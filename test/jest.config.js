const { pathsToModuleNameMapper } = require("ts-jest/utils"); // eslint-disable-line
const { compilerOptions } = require("../tsconfig.json"); // eslint-disable-line

module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.jest.json",
        },
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePaths: ["../"],
    preset: "ts-jest",
    roots: ["../features", "../utils"],
    setupFilesAfterEnv: ["./jest.setup.ts"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["../.next/", "../node_modules/"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
