let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let age = 15;
if(age > 18 && registerEarly === true)
{
    raceNumber = raceNumber + 1000;
}
if(age > 18 && registerEarly === true)
{
    console.log(`${raceNumber} will race at 9:30 am`);
}
else if(age > 18 && registerEarly === false)
{
    console.log(`${raceNumber} will race at 11:00 am`);
}
else if (age < 18)
{
    console.log(`${raceNumber} will race at 12:30 pm`)
}
else
{
    console.log('go to registraton desk!');
}