var supertest = require('supertest');
var should = require('should');
var request = require('chai').expect;
var baseURL = 'https://api.test.securedocex.com';
var endpoint = '/health';
var endpoint2 = '/faxes/received';
var postFaxes = '/faxes'; 
var server = supertest.agent(baseURL);