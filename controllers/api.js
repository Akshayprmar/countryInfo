var _ = require('lodash');
var validator = require('validator');

var countries = require('../resources/countriesV1');

var notFound = function(res) {
  res.json(404, {
    message: "Sorry, that page does not exist",
    code: 34
  })
}

exports.index = function(req, res) {
  res.send({message : 'Welcome buddy!'});
};

exports.getAll = function(req, res) {
  res.status(200).json(countries)
}

exports.callingCode = function(req, res) {

  var calling_code = req.params.callingCode;

  var country = _.find(countries, function(co) {
    return validator.isIn(calling_code, co.callingCode)
  });

  if(!country) {
    let result=[]
    var country = _.find(countries, function(co) {
    if(calling_code.toLowerCase() == co.name.common.toLowerCase()) {
        return co;
      }
    });
    if(!country){
      notFound(res);
    }
    
  }
  res.status(200).json(country)
}