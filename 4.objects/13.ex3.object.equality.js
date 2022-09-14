/**
 * Create to functions from a constructor functions and check
 * 1 whether they are equal by areEqual function
 * 2 whether they are same by areSame function
 */

// addres object with construtor funcion
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
// console.log(address1, address2);

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// They are not same because address1 and and address2 and pointing to two different objects in memory

// But if we reference an abject into another container, they will both point to same object and return true

const address3 = address2;
console.log(areSame(address3, address2));
