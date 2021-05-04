const Park = function(name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
    
}

Park.prototype.addDinosaur = function (dinosaur){
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.searchIndex = function (dinosaur){
    let index =null
    for (let i=0; i<this.dinosaurCollection.length; i++ ){
        if (this.dinosaurCollection[i].name === dinosaur.name){
            index = i
        }

    }
    return index

}

Park.prototype.removeDinosaur = function (dinosaur){
    index = this.searchIndex(dinosaur)
    this.dinosaurCollection.splice(index, 1)

}

Park.prototype.mostAttracts = function (){
    initialAttractionCount =this.dinosaurCollection[0].guestsAttractedPerDay
    dinosaurWithHighAttraction = this.dinosaurCollection[0].species


    for (let i=1; i<this.dinosaurCollection.length; i++ ){

        if (this.dinosaurCollection[i].guestsAttractedPerDay > initialAttractionCount){
            initialAttractionCount = this.dinosaurCollection[i].guestsAttractedPerDay
            dinosaurWithHighAttraction = this.dinosaurCollection[i].species
            
        }

    }

    return dinosaurWithHighAttraction
}


Park.prototype.searchSpecies = function (species){
    collection =[]

    for (dinosaur of this.dinosaurCollection){
        if (dinosaur.species === species){
            collection.push(dinosaur)
        }

    }
    return collection

}

Park.prototype.removeSpecies = function (species){
    let tempCopy = this.dinosaurCollection

    for (let i=0; i<tempCopy.length; i++){
        if (tempCopy[i].species === species){
            this.dinosaurCollection.splice(i,1)
        }
    }


}

Park.prototype.totalVisitorPerDay = function () {
    totalVisitors = 0;
    for (dinosaur of this.dinosaurCollection){
        totalVisitors += dinosaur.guestsAttractedPerDay
};
return totalVisitors
};

Park.prototype.searchDietTypes = function () {
    dianosaurDietType = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0 }

    for ( dinosaur of this.dinosaurCollection){

        switch (dinosaur.diet){
            case 'carnivorus':
                dianosaurDietType.carnivore = dianosaurDietType.carnivore +1
                break;
            case 'herbivorus':
                dianosaurDietType.herbivore = dianosaurDietType.herbivore + 1
                break;
            case 'omnivorus':
                dianosaurDietType.omnivore = dianosaurDietType.omnivore +1
                break;
        }

    }
    return dianosaurDietType;

}


module.exports = Park;