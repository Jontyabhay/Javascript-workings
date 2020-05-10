class School
{
    constructor(name,numberOfStudents,level)
    {
        this._name = name;
        this._numberOfStudents = numberOfStudents;
        this._level = level;
    }
    get name()
    {
        return this._name;
    }
    get numberOfStudents()
    {
        return this._numberOfStudents;
    }
    get level()
    {
        return this._level;
    }
    quickFacts()
    {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }
    static pickSubstituteTeacher(substituteTeachers)
    {
        let myindex = Math.floor((substituteTeachers.length-1) * Math.random());
        return substituteTeachers[myindex];
    }
    set numberOfStudents(newNumberOfStudents)
    {
        if(typeof newNumberOfStudents === 'number')
        {
            this.numberOfStudents = newNumberOfStudents;
        }
        else
        {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}

class PrimarySchool extends School
{
    constructor(name,numberOfStudents,pickupPolicy)
    {
        super(name,numberOfStudents,'primary');
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy()
    {
        return this._pickupPolicy;
    }
}
class HighSchool extends School
{
    constructor(name,numberOfStudents,sportsTeams)
    {
        super(name,numberOfStudents,'high');
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams()
    {
        console.log(this._sportsTeams);
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
