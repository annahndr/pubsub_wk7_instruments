const PubSub = require('../helpers/pub_sub.js');
// console.log(InstrumentData);

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data)

  PubSub.subscribe('SelectView:index of instrument selected', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentFamilyDetail(selectedIndex);
  });
};


InstrumentFamilies.prototype.publishInstrumentFamilyDetail = function(instrumentIndex){
  const selectedInstrumentFamily = this.data[instrumentIndex];
  PubSub.publish('InstrumentFamilies:selected-instrument-family-ready', selectedInstrumentFamily)
};

//
// InstrumentFamilies.prototype.bindEvents = function(){
//     InstrumentData.forEach((instrument_node) => {
//       instrument_node.addEventListener('click', function (event){
//       const instrumentID = event.target.id;
//       PubSub.publish('InstrumentView:instrument-selected', instrumentID)
//     })
//   });
// };



module.exports = InstrumentFamilies;
