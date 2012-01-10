function wakeTimes(iterations, elementId, remCycleLength, timeGettingToSleep) {
   var txt = document.getElementById(elementId);
   var now = new Date();
   var totalMins = ((now.getHours()*60) + now.getMinutes())
   var amPM;

   //making sure the For loop has a number greater than 0
   if (iterations < 1) {
      throw "Variable 'iterations' must be greater than 0"
   }


   for (i = 1; i <= iterations; i++) {

      if (i == 1) {
         totalMins += remCycleLength + timeGettingToSleep;
      }

      else {
         totalMins += remCycleLength;
      }
      

      if (totalMins/60 > 24) {
         if (Math.floor((totalMins/60) % 24) == 0) {
            var newHour = 12;
         }

         else {
            var newHour = Math.floor(totalMins/60) % 24;
         }
         var amPM = "AM";
      }

      else {
         if (Math.floor((totalMins/60) % 24) > 11) {
            var amPM = "PM";
            if (Math.floor(totalMins/60) % 24 == 12) {
               var newHour = 12;
            }
          
            else {
               var newHour = Math.floor(totalMins/60) - 12;
            }
         }

         else {
            var amPM = "AM";
            var newHour = Math.floor(totalMins/60);
         }
         
      }

      if (totalMins % 60 < 10) {
         var newMins = "0" + (totalMins % 60);
      }

      else {
         var newMins = (totalMins % 60);
      }
      
      if (i != iterations) {
         txt.innerHTML += newHour + ":" + newMins + amPM + ", ";
      }
      
      else {
         txt.innerHTML += newHour + ":" + newMins + amPM;
      }
      
      totalMins = (totalMins) % 1440;
   }
}
