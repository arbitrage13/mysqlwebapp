var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var companiesData = require('../Dao/connection/companiesData.js');

  companiesData.companiesData.getAllCompanies(function(companies){
    console.log(companies);
    res.render('Companies', {
      companies : companies 
      //Object.values(JSON.parse(JSON.stringify(companies)))
      
    });
    console.log(companies[0].ticker)
  });
});

module.exports = router;
