/* 
FILENAME: ComplexCode.js

DESCRIPTION: This code demonstrates a complex and sophisticated implementation of a contact management system. It utilizes advanced object-oriented programming concepts, multiple data structures, and various functionalities for maintaining contacts and their information.

*/

class Contact {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.notes = [];
    this.addresses = [];
  }

  addNote(note) {
    this.notes.push(note);
  }

  addAddress(address) {
    this.addresses.push(address);
  }

  getFullAddress() {
    return this.addresses.join(", ");
  }

  deleteAddress(address) {
    const index = this.addresses.indexOf(address);
    if (index !== -1) {
      this.addresses.splice(index, 1);
    }
  }

  displayContactInfo() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Address: ${this.getFullAddress()}`);
    console.log(`Notes: ${this.notes.join("\n")}`);
  }
}

class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  deleteContact(contact) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  searchContacts(term) {
    return this.contacts.filter(
      (contact) =>
        contact.firstName.includes(term) ||
        contact.lastName.includes(term) ||
        contact.email.includes(term) ||
        contact.phone.includes(term)
    );
  }

  displayAllContacts() {
    this.contacts.forEach((contact) => {
      contact.displayContactInfo();
      console.log("------------------");
    });
  }
}

// Demo

const contactManager = new ContactManager();

const contact1 = new Contact("John", "Doe", "john.doe@gmail.com", "1234567890");
contact1.addAddress("123 Main St");
contact1.addAddress("456 Elm St");
contact1.addNote("Friend");

const contact2 = new Contact(
  "Jane",
  "Smith",
  "jane.smith@yahoo.com",
  "9876543210"
);
contact2.addAddress("789 Oak St");
contact2.addNote("Co-worker");

contactManager.addContact(contact1);
contactManager.addContact(contact2);

console.log("All Contacts:");
console.log("==============");
contactManager.displayAllContacts();

console.log("Search Results:");
console.log("==============");
const searchResults = contactManager.searchContacts("john");
searchResults.forEach((contact) => {
  contact.displayContactInfo();
  console.log("------------------");
});