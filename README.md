# Telephone Package
A small JavaScript package that models a telephone using the observer pattern.

Features
Add a phone number with AddPhoneNumber
Remove a phone number with RemovePhoneNumber
Dial an added phone number with DialPhoneNumber
Register observers that are notified whenever a phone number is dialled
Getting Started
Run the example:

npm start
Expected output:

2347023232
Now Dialling 2347023232
Usage
const { Telephone, PhoneNumberObserver } = require("./src/Telephone");

const telephone = new Telephone();
const phoneNumber = "2347023232";

const printPhoneNumberObserver = new PhoneNumberObserver((dialledPhoneNumber) => {
  console.log(dialledPhoneNumber);
});

const printDiallingMessageObserver = new PhoneNumberObserver((dialledPhoneNumber) => {
  console.log(`Now Dialling ${dialledPhoneNumber}`);
});

telephone.addObserver(printPhoneNumberObserver);
telephone.addObserver(printDiallingMessageObserver);

telephone.AddPhoneNumber(phoneNumber);
telephone.DialPhoneNumber(phoneNumber);
API
Telephone
AddPhoneNumber(phoneNumber)
Adds a new phone number.

RemovePhoneNumber(phoneNumber)
Removes an existing phone number.

DialPhoneNumber(phoneNumber)
Dials a phone number only if it has already been added. When dialled, all observers are notified.

addObserver(observer)
Adds an observer to the telephone.

removeObserver(observer)
Removes an observer from the telephone.

notifyObservers(phoneNumber)
Notifies all registered observers when a phone number is dialled.

PhoneNumberObserver
notify(phoneNumber)
Method called by the telephone class when a phone number is dialled.