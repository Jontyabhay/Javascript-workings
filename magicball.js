const userName = 'Akshay';
userName? console.log(`Hello! ${userName}`): console.log('Hello!');
const userQuestion = 'Will i become a rich person?';
console.log(`${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch(randomNumber)
{
    case 0:
        eightBall = 'It is certain';
    case 1:
        eightBall = 'It is decidely so';
    case 2:
        eightBall = 'Reply hazy try again';
    case 3:
        eightBall = 'Cannot predict now';
    case 4:
        eightBall = 'Do not count on it';
    case 5:
        eightBall = 'My sources say no';
    case 6:
        eightBall = 'Outlooknot so good';
    case 7:
        eightBall = 'Signs point to yes';                            
}
console.log(eightBall);