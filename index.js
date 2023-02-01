// Code your solution in this file!
//takes in a pickup location for a passenger, 
//and returns the number of blocks from Scuber 
//headquarters on 42nd Street.
function distanceFromHqInBlocks(startBlock){
    if (startBlock >= 42) {
    return startBlock - 42;}
    else {
        return 42 - startBlock;}

   }

   //distanceFromHqInBlocks = value => in distanctFromHqInFeet
   //block = 264feet

   function distanceFromHqInFeet(startBlock){
    return distanceFromHqInBlocks(startBlock) * 264;
   }

   function distanceTravelledInFeet(start, destination){
    if (start >= destination){
        return (start - destination) * 264}
        else if (start < destination){ 
            return (destination - start) * 264;
        }
    }

    // The first four hundred feet are free.
    // Distance between (&&) 400 and 2000, price is 2 cents per foot
    // flat fare if distance is over 2000 and under 2500 feet. (return:
    //     cant travel this far) if over 2500)

    function calculatesFarePrice (start, destination){
    const distance = distanceTravelledInFeet(start, destination);
        if (distance <= 400){
            return 0
        } else if (distance > 400 && distance <= 2000) {
            return .02 * (distance - 400)
        } else if (distance > 2000 && distance <= 2500) {
          return 25
        } else if (distance > 2500) {
            return 'cannot travel that far'
        }

    }