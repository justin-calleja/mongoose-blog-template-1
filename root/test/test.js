var expect = require('chai').expect;
var mockgoose = require('mockgoose');
var mongoose = require('mongoose');

// mock mongoose before requiring the script which establishes the connection (to mock the connection)
mockgoose(mongoose);
require('../model/db');

var item = require('../model/item');

beforeEach(function(done) {
  mockgoose.reset();
  item.model.create({ text: 'write blog on A' }, { text: 'write blog on B' }, function(err, blogOnA, blogOnB) {
    if(err) {
      console.log('Error creating documents in beforeEach: ' + error);
      throw(err);
    }
    done();
  });
});

describe('Blah', function() {
  describe('Bleh', function() {
    it('item.model.find() should give 2 documents back', function(done) {
      var query = item.model.find();
      query.exec(function(err, docs) {
        expect(docs.length).to.equal(2);
        done();
      });
    });
  });
});
