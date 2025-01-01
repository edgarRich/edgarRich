const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./simfund_stk_simbank.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the simfund_stk_simbank database.');
  });