const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container
}

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-family-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const instrumentName = document.createElement('h3');
  instrumentName.textContent = `${instrument.name}`

  const instrumentDescription = document.createElement('p');
  instrumentDescription.textContent = `${instrument.description}`

  const instrumentsList = document.createElement('p');


  // map over instruments for better display?
  // create a ul,
  // create li appended with the things in the array(loop over it)
  // append the li to the ul

  instrumentsList.textContent = `Instruments: ${instrument.instruments.join(', ')}`

  this.container.innerHTML = ''; //like form.reset
  this.container.appendChild(instrumentName);
  this.container.appendChild(instrumentDescription);
  this.container.appendChild(instrumentsList);


};


module.exports = InstrumentInfoView;
