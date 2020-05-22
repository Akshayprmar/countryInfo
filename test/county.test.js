var app= require('../server')
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('API Tests', function() {
  it('Country Code Reponse Success', function(done) {
    request(app)
      .get('/api/v1/county/60')
      .end(function(err, res) {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it('Country Code Reponse Success but Data not availabel', function(done) {
    request(app)
      .get('/api/v1/county/6067')
      .end(function(err, res) {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
  });

  it('Country Name Reponse Success but Data not availabel', function(done) {
    request(app)
      .get('/api/v1/county/Malaysia')
      .end(function(err, res) {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
  });

  it('Country Name Reponse Success but Data not availabel', function(done) {
    request(app)
      .get('/api/v1/county/Malaysia2')
      .end(function(err, res) {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
  });
});