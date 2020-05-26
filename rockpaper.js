const getUserChoice = (userInput) =>
{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor')
    {
        return userInput;
    }
    else
    {
        console.log('Invalid Input!!');
    }
}
const getComputerChoice = () =>
{
    let random = Math.floor(Math.random() * 3)
    switch(random)
    {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';        
    }
}
const determineWinner = (userChoice,computerChoice) =>
{
    if(userChoice === computerChoice)
    {
        return 'The game is tied';
    }
    if(userChoice === 'paper')
    {
        if(computerChoice === 'scissor' || computerChoice === 'rock')
        {
            return 'computer won!';
        }
        else
        {
            return 'You won!';
        }
    }
    if(userChoice === 'scissor')
    {
        if(computerChoice === 'rock' || computerChoice === 'paper')
        {
            return 'computer won!';
        }
        else
        {
            return 'You won!';
        }
    }
    if(userChoice === 'rock')
    {
        if(computerChoice === 'paper' || computerChoice === 'scissor')
        {
            return 'Computer won!';
        }
        else
        {
            return 'You won!';
        }
    }
}
const playGame = () =>
{
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log(`${userChoice} was user choice`);
    console.log(`${computerChoice} was computer choice`);
    console.log(determineWinner(userChoice,computerChoice));
}
playGame();