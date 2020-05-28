const getSleepHours = (day) =>
{
    switch(day)
    {
        case 'monday':
            return 8;
        case 'tuesday':
            return 7;
        case 'wednesday':
            return 9;
        case 'thursday':
            return 6;
        case 'friday':
            return 8;
        case 'saturday':
            return 10;
        case 'sunday':
            return 12;                         
    }
}
const getActualSleepHours = () =>
{
    const total = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return total;
}
const getIdealSleepHours = (idealHours) =>
{
    return idealHours * 7;
}
const calculateSleepDebt = () =>
{
   const actualSleepHours = getActualSleepHours();
   console.log(`Actual sleep hours are ${actualSleepHours}`);
   const idealSleepHours = getIdealSleepHours(7);
   console.log(`Ideal Sleep hours are ${idealSleepHours}`);
   if(actualSleepHours === idealSleepHours)
   {
       console.log('User got perfect sleep!');
   }
   else if(actualSleepHours > idealSleepHours)
   {
       console.log(`User got more sleep by ${actualSleepHours-idealSleepHours} hours`);
   }
   else if(actualSleepHours < idealSleepHours)
   {
       console.log(`User should get some rest by ${idealSleepHours-actualSleepHours} hours`);
   }
}
calculateSleepDebt();