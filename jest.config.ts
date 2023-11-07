import type { Config as JestConfig } from 'jest';

const jestConfig: JestConfig = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['dist'],
  testEnvironment: 'node',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
};

export default jestConfig;
