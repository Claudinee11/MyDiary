
import chai, { expect } from 'chai';

import chaiHTTP from 'chai-http';

import userInformation from '../models/userTest';

import app from '../../index';

chai.use(chaiHTTP);


describe('POST user creating an account with invalid email', () => {
    it('user should return status of bad requested', (done) => {
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
});
describe('POST user creating an account without password', () => {
    it('user should return status of bad requested', (done) => {
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
});
describe('POST user creating an account without firstname', () => {
    it('user should return status of bad requested', (done) => {
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
});
describe('POST user creating an account without lastname', () => {
    it('user should return status of bad requested', (done) => {
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
});
describe('POST user login fail', () => {
    it('user should return invalid email', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[7])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });
});
describe('POST user login fail', () => {
    it('user should return invalid password', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[8])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });
});
describe('POST user login fail', () => {
    it('user should return data does not match', (done) => {
        chai
            .request(app)
            .post('/api/v1/auth/signin')
            .set('Accept', 'application/json')
            .send(userInformation[8])
            .end((err, res) => {
                expect(res.status).to.equals(400);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equals(400);

                done();
            });
    });
});