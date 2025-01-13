// test.ts
import { goToHome, goBack, ussdRouter } from './index'; // Ensure this path is correct
import { goToHomeFixtures, goBackFixtures, ussdRouterFixtures } from './fixtures';
import { testArray } from './utils'; // Correct import path
import { describe, it } from '@jest/globals'; // Importing Jest functions

describe('USSD Router Functions', () => {
  describe('goToHome()', () => {
    testArray(goToHomeFixtures, goToHome);
  });

  describe('goBack()', () => {
    testArray(goBackFixtures, goBack);
  });

  describe('ussdRouter()', () => {
    testArray(ussdRouterFixtures, ussdRouter);
  });
});
