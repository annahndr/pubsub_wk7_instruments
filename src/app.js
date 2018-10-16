const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_views.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');
const InstrumentData = require('./data/instrument_data.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const families = new InstrumentFamilies (InstrumentData);
  console.log(families);
  families.bindEvents();

  const infoDiv = document.querySelector("#display-instrument-family")
  const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
  instrumentInfoDisplay.bindEvents();


});
