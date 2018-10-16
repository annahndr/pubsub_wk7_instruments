const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  console.log("hello from select views");
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    console.log('select view all instruments', allInstruments);
    this.populate(allInstruments);
  });

// this.element is meant to be the drop down menu
  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;

    console.log('SelectView: selectedIndex', selectedIndex);
    
    PubSub.publish('SelectView:index of instrument selected', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}


module.exports = SelectView;
