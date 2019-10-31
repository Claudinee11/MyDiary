import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';

import userEntries from '../models/entryTest';


import app from '../../index';



chai.use(chaiHTTP);

describe('POST entries , /api/v1/entries', () => {

  it('"should return" you are not user', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
      .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5peW9uc2FiYWNvY28xMkBnbWFpbC5jb20iLCJpYXQiOjE1NzI0Mzc4MjQsImV4cCI6MTU3MjYxMDYyNH0._wgib6wGiXcyuk2d5DdJZEkLWAzA2HbFoTRITUObzb4')
    
      .set('Accept', 'application/json')
      .send(userEntries[0])
      .then((res) => {
        expect(res.status).to.equal(401);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(401);   
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('should return: title is not to be empty', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
   
      .set('Accept', 'application/json')
      .send(userEntries[3])
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('should return: description is not to be empty', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
   
      .set('Accept', 'application/json')
      .send(userEntries[1])
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  it('should return invalid token', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
    
      .set('Accept', 'application/json')
      .send(userEntries[2])
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  it('should return invalid token', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
   
      .set('Accept', 'application/json')
      .send(userEntries[2])
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  

  it('should return the id is not a number ', (done) => {
    chai
    .request(app)
      .patch('/api/v1/entries/id')
      .set('Accept', 'application/json')
      .send(userEntries[2])
      .then((res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(400);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
})
it('should return you are not allowed to delete entries', (done) => {
  chai
  .request(app)
    .delete('/api/v1/entries/id')
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5peW9uc2FiYWNvY28xMkBnbWFpbC5jb20iLCJpYXQiOjE1NzI0Mzc4MjQsImV4cCI6MTU3MjYxMDYyNH0._wgib6wGiXcyuk2d5DdJZEkLWAzA2HbFoTRITUObzb4')
    .set('Accept', 'application/json')
    
    .then((res) => {
      expect(res.status).to.equal(401);
      expect(res.body).to.be.an('object');
      expect(res.body.status).to.equal(401);
      
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});
it('should return your are not user because using invalid token', (done) => {
  chai
  .request(app)
    .get('/api/v1/entries/100')
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5peW9uc2FiYWNvY28xMkBnbWFpbC5jb20iLCJpYXQiOjE1NzI0Mzc4MjQsImV4cCI6MTU3MjYxMDYyNH0._wgib6wGiXcyuk2d5DdJZEkLWAzA2HbFoTRITUObzb4')
    .set('Accept', 'application/json')
    
    .then((res) => {
      expect(res.status).to.equal(401);
      expect(res.body).to.be.an('object');
      expect(res.body.status).to.equal(401);
      
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});
it('should return entries id should be a number', (done) => {
  chai
  .request(app)
    .get('/api/v1/entries/abcd')
    // .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5peW9uc2FiYWNvY28xMkBnbWFpbC5jb20iLCJpYXQiOjE1NzI0Mzc4MjQsImV4cCI6MTU3MjYxMDYyNH0._wgib6wGiXcyuk2d5DdJZEkLWAzA2HbFoTRITUObzb4')
    .set('Accept', 'application/json')
    
    .then((res) => {
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
      expect(res.body.status).to.equal(400);
      
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});
it('should return your are not user because using invalid token', (done) => {
  chai
  .request(app)
    .get('/api/v1/entries/100')
    .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im5peW9uc2FiYWNvY28xMkBnbWFpbC5jb20iLCJpYXQiOjE1NzI0Mzc4MjQsImV4cCI6MTU3MjYxMDYyNH0._wgib6wGiXcyuk2d5DdJZEkLWAzA2HbFoTRITUObzb4')
    .set('Accept', 'application/json')
    
    .then((res) => {
      expect(res.status).to.equal(401);
      expect(res.body).to.be.an('object');
      expect(res.body.status).to.equal(401);
      
      done();
    })
    .catch((err) => {
      console.log(err);
    });
});

    


