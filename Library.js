class Media {
    constructor(title)
    {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }
    get title()
    {
        return this._title;
    }
    get isCheckedOut()
    {
        return this._isCheckedOut;
    }
    get ratings()
    {
        return this._ratings;
    }

    toggleCheckOutStatus()
    {
        if(this._isCheckedOut === true)
        {
            this._isCheckedOut = false;
        }
        else if(this._isCheckedOut === false)
        {
            this._isCheckedOut = true;
        }
    }

    getAverageRating()
    {
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        return (ratingsSum/lengthOfArray);
    }

    addRating(newrating)
    {
        if(newrating === 1 || newrating === 2 || newrating === 3 || newrating === 4 || newrating === 5)
        {
        this._ratings.push(newrating);
        }
        else 
        {
            console.log('Invalid rating entered!!');
        }
    }
    set isCheckedOut(newisCheckedOut)
    {
        return this._isCheckedOut = newisCheckedOut;
    }
}

class Book extends Media
{
    constructor(author,title,pages)
    {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author()
    {
        return this._author;
    }
    get pages()
    {
        return this._pages;
    }
}
class Movie extends Media
{
    constructor(director,title,runtime,movieCast,songTitles)
    {
        super(title);
        this._director = director;
        this._runtime = runtime;
        this._movieCast = movieCast;
        this._songTitles = songTitles;
    }
    get director()
    {
        return this._director;
    }
    get runtime()
    {
        return this._runtime;
    }
}
class CD extends Media
{
    constructor(artist,title,songs)
    {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist()
    {
        return this._artist;
    }
    get songs()
    {
        return this._songs;
    }
    shuffle()
    {
        let ran = Math.floor(Math.random() * this._songs.length);
        return this._songs[ran];
    }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(6);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan De Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const cd = new CD('Sonu Nigam','Kaash...',['teri','Meri','Kahani']);
console.log(cd.shuffle());
console.log(cd._title);