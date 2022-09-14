/**
 * create an address object that has three properties
 * street, city, zipCode
 *
 * and a showAddress function that takes the address object
 * and displays its properties along with their value
 */

const address = {
  street: 4,
  city: "rawalpindi",
  zipcode: 46000,
};

function showAddress(obj) {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}

showAddress(address);
