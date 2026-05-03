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