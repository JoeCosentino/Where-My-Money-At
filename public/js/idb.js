// create variable to hold db connection
let db;

// establish a connection to IndexedDB database called 'budget_tracker' and set it to version 1
const request = indexedDB.open('budget_tracker', 1);

// this event will emit if the database version changes (nonexistant to version 1, v1 to v2, etc)
request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;
    // create object store called 'new_budget', set it to auto increment
    db.createObjectStore('new_budget', { autoIncrement: true });
}

request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
    db = event.target.result;

    // check if app is online, if yes run uploadBudget to send all local db data to api
    if(navigator.online) {
        // uploadBudget();
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

// execute this function if we attempt to submit budget with no internet connection
function saveRecord(record) {
    // open a new transaction with the database with read and write permissions
    const transaction = db.transaction(['new_budget'], 'readwrite');

    // access the object store for 'new_budget'
    const budgetObjectStore = transaction.objectStore('new_budget');

    // add record to your store with add method
    budgetObjectStore.add(record);
};

module.exports = saveRecord;