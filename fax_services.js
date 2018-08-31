//var config = require('./config');
//var endpoint = require('./endpoints');
var supertest = require('supertest');
var should = require('should');
var request = require('chai').expect;
var baseURL = 'https://api.test.securedocex.com';
var endpoint = '/health';
var endpoint2 = '/faxes/received';
var postFaxes = '/faxes'; 
var server = supertest.agent(baseURL);
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTMzMDU0OTI5LCJhdXRob3JpdGllcyI6WyJST0xFX0ZTVE9SIl0sImp0aSI6ImZmODlkOWMxLTUzMTctNDJhYS1iYTQxLTJlOTIwOTE5MzFkOCIsImNsaWVudF9pZCI6IjM5MzIifQ.LbK8FCEgQW1_aOiq7banU6jM1WGM-aIRH8EDBXI9rtkGwrQSvWuXwGu7TV9E-k5excWbYavxIlKnZrCuGROi_dIdQF46AXXbPitQpaUzKFJvKOpL4j-5_hqlQK1AJrQpLPNllKkr7OXZB9FhMh_KDOSqPhKIvE7EKjUhg2Oaxy-CyG7OP0lwnkp6hR2CENguE_HfgA9TGN9TgKFdI0RZ28l24NMW9MreZxhsB-SSx5XlmMJ8KMrKNVNLJqF0hr_KRg13pW7LBEO2v5Rr6OaGQao1F4wxAPH36hUoACxiRrU3N4HlYLSAVZk615A4p-hupoHkfpAItP7DxbIWFzcFoQ';
//var encoded_image0 = 'C:\Workspace\apache-jmeter-3.3\project\fax_service_api\script\data\pdf\2pages.txt'
var body = { 'destinations': [
    {
      'to_name': 'name',
      'to_company': 'company',
      'fax_number': '15222051030'
    }
  ],
  'fax_options': {
    'image_resolution': 'STANDARD',
    'include_cover_page': true,
    'cover_page_options': {
      'from_name': 'unit test',
      'subject': 'POSTFaxone{fetch}',
      'tags': [
        {
          'tag': 'C'
        },
        {
          'tag': 'U'
        },
        {
          'tag': 'I'
        }
      ]
    },
    'non_billable_retries': 5,
    'billable_retries': 2
  },
  'client_data': {
    'client_code': 'client code',
    'client_id': 'client id',
    'client_matter': 'client matter',
    'client_name': 'client name',
    'client_reference_id': 'client reference id',
    'billing_code': 'billing code'
  },
  'documents': [
    {
      'document_type': 'TXT',
      'document_content': 'C:\Workspace\apache-jmeter-3.3\project\fax_service_api\script\data\pdf\2pages.txt'
    }
  ]
};

describe('Fax Services', function() {
    
    //GET /health

    it('/health 200', function (done) {

        var response = {
            status: 'UP',
            dynamoDb: {
                status: 'UP',
                region: 'us-west-2'
            }, 
            diskSpace: {
                status: 'UP'
            }

        };

        server
            .get(endpoint)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            });
    });

    // GET /faxes /received

    it('GET /faxes/received 200', function (done) {

        var response = {};

        server
            .get(endpoint2)
            .set('transaction-id', '89270619-5112-4350-ac67-getfaxesreceived')
            .set('Authorization', 'Bearer' + token)
            .set('Content-Type', 'application/json')
            .set('user-id', '93930312-93930311')
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            });
    });

    // Post /faxes 

    it(' POST /faxes 201', function (done) {
 
        var response = {};

        server
            .post(postFaxes)
            .set('transaction-id', '89270619-5112-4350-ac67-faa1postfaxes')
            .set('Authorization', 'Bearer' + token)
            .set('Content-Type', 'application/json')
            .set('user-id', '93930312-93930311')
            .send(body)
            .end(function (err, res) {
                res.status.should.equal(201);
                res.body.should.match(response);
                done();
            });
    })

    // Delete /faxes

   // let faxesPost = new fax (((err, book))) 
    var fax_id = '723d3c03-ff3e-53b3-e053-5601b00a420d';

    it(' Delete /faxes/{fax_id} 204', function (done) {
 
        var response = {};

        server
            .delete(postFaxes + '/' + fax_id)
            .set('transaction-id', '89270619-5112-4350-ac67-deletefaxes')
            .set('Authorization', 'Bearer' + token)
            .set('Content-Type', 'application/json')
            .set('user-id', '93930312-93930311')
            .end(function (err, res) {
                res.status.should.equal(204);
                done();
            });
    })

});