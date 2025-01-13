// fixtures.ts
export const goToHomeFixtures = [
    { input: '', output: '' },
    { input: '1738*1*1', output: '1738*1*1' },
    { input: '1738*1*1*0', output: '' },
    { input: '1738*1*1*0*1*2', output: '1*2' },
    { input: '1738*1*1*0*1*2*0', output: '' },
    { input: '1738*1*1*0*1*2*0*3*1', output: '3*1' },
];
  
export const goBackFixtures = [
    { input: '1738*1*1*00', output: '1738*1*1' },
    { input: '1738*1*1*1*00', output: '1738*1*1*1' },
    { input: '00*1*2*3', output: '1*2*3' },
    { input: '1*2*3*00', output: '1*2' },
];
  
export const ussdRouterFixtures = [
    { input: '1738*1*1*0', output: 'Welcome to Simfund-stk-Simbank\n1. Send Money\n2. Request Money\n3. Buy Airtime\n4. Check Balance' },
    { input: '1738*1*1*0*1*2', output: '1*2' },
    { input: '1738*1*1*0*1*2*00', output: '1*2' },
];

 