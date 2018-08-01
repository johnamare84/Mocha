var supertest = require('supertest');
var should = require('should');
//var request = require('chai').expect;
var baseUrl = 'https://jsonplaceholder.typicode.com';
var endpoint1 = '/posts/1'; 
var endpoint2 = '/posts/1/comments';
var endpoint3 = '/comments?postId=1'; 
var endpoint4 = '/posts';
var endpoint5 = '/posts/1';
var endpoint6 = '/posts/1';
var endpoint7 = '/posts/1';
var server = supertest.agent(baseUrl);

describe ('json place holder api practive ', function() {
    
    
    // Get /posts/1
    
    it(endpoint1, function(done) {

        var response = {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        };

        server
            .get(endpoint1)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            },)

    });

    // Get /posts/1/comments

    it(endpoint2, function(done) {

        var response = [{
            'postId': 1,
            'id': 1,
            'name': 'id labore ex et quam laborum',
            'email': 'Eliseo@gardner.biz',
            'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
          },

          {
            'postId': 1,
            'id': 2,
            'name': 'quo vero reiciendis velit similique earum',
            'email': 'Jayne_Kuhic@sydney.com',
            'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
          },
    
          {
            'postId': 1,
            'id': 3,
            'name': 'odio adipisci rerum aut animi',
            'email': 'Nikita@garfield.biz',
            'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
          },

          {
            'postId': 1,
            'id': 4,
            'name': 'alias odio sit',
            'email': 'Lew@alysha.tv',
            'body': 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
          },

          {
            'postId': 1,
            'id': 5,
            'name': 'vero eaque aliquid doloribus et culpa',
            'email': 'Hayden@althea.biz',
            'body': 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
          }
        ];

        server
            .get(endpoint2)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            },)

    });

    // Get /comments?postId=1


    it(endpoint3, function(done) {

        var response = [
            {
              'postId': 1,
              'id': 1,
              'name': 'id labore ex et quam laborum',
              'email': 'Eliseo@gardner.biz',
              'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
            },
            {
              'postId': 1,
              'id': 2,
              'name': 'quo vero reiciendis velit similique earum',
              'email': 'Jayne_Kuhic@sydney.com',
              'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
            },
            {
              'postId': 1,
              'id': 3,
              'name': 'odio adipisci rerum aut animi',
              'email': 'Nikita@garfield.biz',
              'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
            },
            {
              'postId': 1,
              'id': 4,
              'name': 'alias odio sit',
              'email': 'Lew@alysha.tv',
              'body': 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
            },
            {
              'postId': 1,
              'id': 5,
              'name': 'vero eaque aliquid doloribus et culpa',
              'email': 'Hayden@althea.biz',
              'body': 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
            }
          ];

        server
            .get(endpoint3)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            },)

    });

    // Post /posts

    it(endpoint4, function(done) {

      
      var response = {
            'id': 101
        
        }; 

        server
            .post(endpoint4)
            .end(function (err, res) {
                res.status.should.equal(201);
                res.body.should.match(response);
                done();
            },)

    timeout = 10000;

    });

    // Put /posts/1

    it(endpoint5, function(done) {

        var response = {
            'id': 1
        };

        server
            .put(endpoint5)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            },)

    });

    // Patch /posts/1

    it(endpoint6, function(done) {

        var response = {
            'userId': 1,
            'id': 1,
            'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        };

        server
            .patch(endpoint6)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            },)

    });

    // Delete /posts/1

    it(endpoint7, function(done) {

        var response = {};

        server
            .patch(endpoint7)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.should.match(response);
                done();
            },)

    });

})