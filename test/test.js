var request = require('supertest');
var app = require('../index.js');describe('GET /', function() {
 it('respond with hello pe hai', function(done) { //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello pe hai', done);
 });
});
