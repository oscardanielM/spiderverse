class Spiderman{
    constructor(name, age, actor, movies, studio){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.movies = movies;
        this.studio = studio;
    }

    get getInfo(){
        return `Hola, Soy ${this.actor} y vengo de ${this.studio} studios`;
    }
}

module.exports = Spiderman;