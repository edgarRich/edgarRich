import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node', // or 'jsdom' if you're testing browser code
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // If you're using TypeScript
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

export default config;