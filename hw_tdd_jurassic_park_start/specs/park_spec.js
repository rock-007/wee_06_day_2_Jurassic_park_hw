const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic Park', 60);
    dinosaurTrex = new Dinosaur('T-rex', "carnivorus", 70)
    dinosaurPelsarus = new Dinosaur('Pelsarus',"omnivorus", 90)
    dinosaurTrex02 = new Dinosaur('T-rex', "carnivorus", 70)
    dinosaurTrex03 = new Dinosaur('T-rex', "carnivorus", 70)
    dinosaurTrex04 = new Dinosaur('T-rex', "carnivorus", 70)

  });

  it('should have a name', function (){
    active = park.name
    assert.strictEqual(active, 'Jurassic Park')

  });

  it('should have a ticket price', function (){
    active = park.ticketPrice
    assert.strictEqual(active, 60)

  });

  it('should have a collection of dinosaurs',  function (){
    active = park.dinosaurCollection
    assert.deepStrictEqual(active, [])
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaurTrex)
    index = park.searchIndex(dinosaurTrex)
    assert.strictEqual(park.dinosaurCollection[index].name,dinosaurTrex.name)

  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur(dinosaurTrex)
    index = park.searchIndex(dinosaurTrex)
    lengthofCollection = park.dinosaurCollection.length
    park.removeDinosaur(dinosaurTrex)
    assert.strictEqual(lengthofCollection-1, park.dinosaurCollection.length)

  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaurTrex)
    park.addDinosaur(dinosaurPelsarus)
    assert.strictEqual(park.mostAttracts(), 'Pelsarus')

  });

  it('should be able to find all dinosaurs of a particular species', function (){
    park.addDinosaur(dinosaurTrex)
    park.addDinosaur(dinosaurPelsarus)
    park.addDinosaur(dinosaurTrex02)
    park.addDinosaur(dinosaurTrex03)
    speciesCollection = park.searchSpecies('T-rex')
    assert.strictEqual(speciesCollection.length,3)
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaurTrex)
    park.addDinosaur(dinosaurPelsarus)
    park.addDinosaur(dinosaurTrex02)
    park.addDinosaur(dinosaurTrex03)    
    perDayVisits = park.totalVisitorPerDay()
    assert.strictEqual(perDayVisits, 300)

  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaurTrex)
    park.addDinosaur(dinosaurPelsarus)
    park.addDinosaur(dinosaurTrex02)
    park.addDinosaur(dinosaurTrex03)    
    perYearVisits = park.totalVisitorPerDay() * 365
    assert.strictEqual(perYearVisits, 109500)

  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaurTrex)
    park.addDinosaur(dinosaurPelsarus)
    park.addDinosaur(dinosaurTrex02)
    park.addDinosaur(dinosaurTrex03)    
    perYearVisits = park.totalVisitorPerDay() * 365
    perYearRevenue = perYearVisits * park.ticketPrice 
    assert.strictEqual(perYearRevenue, 6570000)

  });

});
