import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';

import userEntries from '../models/entryTest';


import app from '../../index';



chai.use(chaiHTTP);

describe('POST entries , /api/v1/entries', () => {

  it('should return "title" is required ', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
    
      .set('Accept', 'application/json')
      .send(userEntries[0])
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
