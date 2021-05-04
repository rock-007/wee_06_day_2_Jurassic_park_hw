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

module.exports = Park;