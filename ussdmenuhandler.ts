// ussdMenuHandler.ts
export const goBack = (str: string, keyword: string = '00'): string => {
    if (!str) return ''; // Handle empty input
  
    const strArray: string[] = str.split('*');
    const newStrArray: string[] = [];
  
    for (let i = 0; i < strArray.length; i += 1) {
      if (strArray[i] === keyword) {
        newStrArray.pop(); // Remove the last string coming before the keyword
      } else {
        newStrArray.push(strArray[i]); // Add the current string to the new array
      }
    }
  
    return newStrArray.join('*');
  };
  
  export const goToHome = (str: string, keyword: string = '0'): string => {
    if (!str) return ''; // Handle empty input
  
    const strArray = str.split('*');
  
    for (let i = strArray.length - 1; i >= 0; i -= 1) {
      if (strArray[i] === keyword) {
        return strArray.slice(i + 1).join('*'); // Remove everything preceding the keyword (keyword included)
      }
    }
  
    return str; // Return original string if keyword not found
  };
  
  export const ussdRouter = (str: string,
    goToHomeKeyword: string = '0',
    goBackKeyword: string = '00'): string => {
    const welcomeMessage = "Welcome to Simfund-stk-Simbank\n";
    const services = "1. Send Money\n2. Request Money\n3. Buy Airtime\n4. Check Balance\n";
  
    const homeStr = goToHome(str, goToHomeKeyword);
    
    // If the user is at the home menu, display the welcome message and services
    if (homeStr === '') {
      return welcomeMessage + services;
    }
  
    return goBack(homeStr, goBackKeyword);
  };