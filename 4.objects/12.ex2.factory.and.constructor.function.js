/**
 * Intialise the previous an address object with factory and constructor function
 */

// addres object with construtor funcion
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// address object with factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const addressFactory = createAddress(4, "rwp", 4600);
const addressConstructor = new Address(4, "rwp", 4600);

console.log(addressFactory);
console.log(addressConstructor);
