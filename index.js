// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}
function distanceFromHqInFeet(pickupLocation) {
  let numberOfBlocks = distanceFromHqInBlocks(pickupLocation);
  return 264 * numberOfBlocks;
}
function distanceTravelledInFeet(startBlock, destinationBlock) {
  return Math.abs((destinationBlock - startBlock) * 264);
}
function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
