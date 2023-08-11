class Country{
    constructor(name,cap,popu,conti,flag,fact){
this.name = name
this.capital = cap
this.population = popu
this.continent = conti
this.flag = flag
this.funFact = fact
    }
    details() {
        show.innerHTML = `
        <h1 align="center">${this.name}</h1>
        <h4>Capital City : ${this.capital}</h4>
        `
       }
}
let Nig = new Country("Nigeria", "Abuja", 54547474, "Africa", "flag", "Na only cruise")
const see=()=>{
    if(selector.value==nig.value)
    Nig.details()
}