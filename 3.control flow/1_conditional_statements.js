/**
 * In JavaScript we have two types of conditional statements
 *
 * If & else
 *
 * Switch statements
 */

// if & else

// Hour
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6am: Good afternoon!
// Otherwise: Good evening!

let hour = 20;

if (hour >= 6 && hour < 12) console.log("Good Morning!");
else if (hour >= 12 && hour < 18) console.log("Good Afternoon!");
else console.log("Good evening!");

// switch and case

// imagine your identifying a role if a role of a user is guest or a moderator

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator user");
    break;

  default:
    console.log("Unknown user");
}
