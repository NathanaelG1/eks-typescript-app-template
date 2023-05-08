const assert = require('chai').assert;
const request = require('supertest');
const application = require('../index.tsx');

describe('GET /', function() {
  it('responds with JSON object', function(done) {
    request('http://localhost:3000')
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.deepStrictEqual(res.body, {
          "message": "Automate all the things!",
          "timestamp": res.body.timestamp
        });
        done();
      });
  });
});