
import chai, { expect } from 'chai';

import chaiHTTP from 'chai-http';

import userInformation from '../models/userTest';

import app from '../server';

chai.use(chaiHTTP);


describe('Testing sign up', () => {
    it('user should return invalid input', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userInformation[1])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });


    it('user should return incorect data', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userInformation[2])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });


    it('user should return invalid first name', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userInformation[3])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });


    it('user should return invalid lastname', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userInformation[4])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });
    it('should return user created successfully', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userInformation[5])
            .end((err, res) => {
                expect(res.status).to.equals(201);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(201);

                done();
            });
    });
    it('should return email already exist', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signup')
            .set('Accept', 'application/json')
            .send(userInformation[10])
            .end((err, res) => {
                expect(res.status).to.equals(409);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(409);

                done();
            });
    });
});
describe('testing login', () => {
    it('user should return invalid email', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[6])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });

    it('user should return invalid password', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[7])
            .end((err, res) => {
                expect(res.status).to.equals(401);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(401);

                done();
            });
    });


    it('user should return data does not match', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[8])
            .end((err, res) => {
                expect(res.status).to.equals(404);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(404);

                done();
            });
    });
    it('login successfully', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[9])
            .end((err, res) => {
 
         expect(res.status).to.equals(201);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(201);

                done();
            });
    });
   
});