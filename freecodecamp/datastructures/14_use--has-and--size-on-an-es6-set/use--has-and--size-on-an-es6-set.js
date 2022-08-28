function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   var set = new Set(arrToBeSet);

   return [set.has(checkValue), set.size];

   // Only change code above this line

}