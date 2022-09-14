/**
 * @Description A speed limit calculator for say a highway
 * @Speed limit = 70
 * @Points if speed goes 5 points above driver gets one point,
 * less than 5 points doesn't effect a point
 * @Roundoff you can use Math.floor(1.3), to get largest integer
 * @Lincese_Suspended if a drivers get 12 points license will be suspended
 */

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

checkSpeed(71);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  const exceedingSpeed = speed - speedLimit;
  const points = Math.floor(exceedingSpeed / kmPerPoint);

  if (points < 1) {
    console.log("Ok");
    return;
  }

  if (points >= 12) console.log("License Suspended");
  else console.log("Points", points);
}
