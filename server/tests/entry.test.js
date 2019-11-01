import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import tokenGenerated from '../helpers/token';
 
import userEntries from '../models/entryTest';
import userInformation from '../models/userTest';
import userInf from '../models/user1test';

import app from '../server';


chai.use(chaiHTTP);

const token = tokenGenerated(userInformation[5].email);
const Token = tokenGenerated(userInf[0].email);

describe('post entry, /api/v1/entries', () =>{
  
it('should return created entry successfully', (done) => {
       chai
       .request(app)
         .post('/api/v1/entries')
        .set('token', token)
          .set('Accept', 'application/json')
        .send(userEntries[0])
         .then((res) => {
              
          
          expect(res.status).to.equal(201);
          expect(res.body).to.be.an('object');
          expect(res.body.status).to.equal(201);
          
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
    .set('token', token)
     .set('Accept', 'application/json')
     .send(userEntries[3])
     .then((res) => {
        expect(res.status).to.equal(400);
       expect(res.body).to.be.an('object');
       expect(res.body.status).to.equal(400);
        
        done();
      })
     .catch((err) => {
       
      });
  });
  it('should return: description is not to be empty', (done) => {
    chai
    .request(app)
      .post('/api/v1/entries')
       .set('token', token)
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
  it('should return entry retrieved successfully', (done) => {
    chai
    .request(app)
      .get('/api/v1/entries')
      .set('token', token)
       
      .set('Accept', 'application/json')
      
      .then((res) => {
       
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(200);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  
  it('should return entry retrieved successfully', (done) => {
    chai
    .request(app)
      .get('/api/v1/entries/1')
      .set('token', token)
      .set('Accept', 'application/json')
      
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(200);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });


  it('should return modify successfully', (done) => {
    chai
    .request(app)
      .patch('/api/v1/entries/1')
      .set('token', token)
      .set('Accept', 'application/json')
      .send(userEntries[4])
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(200);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  

  it('should return the id is not a number ', (done) => {
    chai
    .request(app)
      .get('/api/v1/entries/abcdhj')
      .set('Accept', 'application/json')
      .set('token', token)
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
  it('should return the entries not found ', (done) => {
    chai
    .request(app)
      .delete('/api/v1/entries/4000')
      .set('Accept', 'application/json')
      .set('token', token)
     
      .then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('should return entries not modified ', (done) => {
    chai
    .request(app)
      .patch('/api/v1/entries/3')
      .set('Accept', 'application/json')
      .set('token', token)
        .send(userEntries[0])
      .then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('should return the entries does not found ', (done) => {
    chai
    .request(app)
      .get('/api/v1/entries/2000')
      .set('token', token)
      .set('Accepts', 'application/json')
     
      .then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('should return id is number ', (done) => {
    chai
    .request(app)
      .patch('/api/v1/entries/abcccc')
      .set('token', token)
      .set('Accepts', 'application/json')
       .send(userEntries[4])
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
  it('should return you are not allowed to modify this entry ', (done) => {
    chai
    .request(app)
      .patch('/api/v1/entries/1')
      .set('token', Token)
      .set('Accepts', 'application/json')
       .send(userEntries[5])
      .then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  it('should return you are not allowed to delete this entry ', (done) => {
    chai
    .request(app)
      .delete('/api/v1/entries/1')
      .set('token', Token)
      .set('Accepts', 'application/json')
      .then((res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(404);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
      it('should return  id is a number', (done) => {
        chai
        .request(app)
          .delete('/api/v1/entries/gsshjk')
          .set('token', token)
          .set('Accepts', 'application/json')
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
  });
  it('should return entry deleted', (done) => {
    chai
    .request(app)
      .delete('/api/v1/entries/1')
      .set('token', token)
      .set('Accepts', 'application/json')
      .then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.equal(200);
        
        done();
      })
      .catch((err) => {
        console.log(err);
      });
    });
   
});
  



