
src
Telephone.js



class PhoneNumberObserver {
  constructor(onNotify) {
    if (typeof onNotify !== "function") {
      throw new TypeError("Observer requires a notification function.");
    }

    this.onNotify = onNotify;
  }

  notify(phoneNumber) {
    this.onNotify(phoneNumber);
  }
}

class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = new Set();
  }

  AddPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  RemovePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  DialPhoneNumber(phoneNumber) {
    if (!this.phoneNumbers.has(phoneNumber)) {
      throw new Error(`Phone number ${phoneNumber} has not been added.`);
    }

    this.notifyObservers(phoneNumber);
  }

  addObserver(observer) {
    if (!observer || typeof observer.notify !== "function") {
      throw new TypeError("Observer must have a notify method.");
    }

    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }
}

module.exports = {
  Telephone,
  PhoneNumberObserver
};