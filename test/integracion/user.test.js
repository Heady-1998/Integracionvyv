const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../view/user');

chai.use(chaiHttp);
const expect = chai.expect;

describe('User Integration Test', function () {
    this.timeout(5000); // Aumentar el tiempo límite de las pruebas a 5 segundos

    it('should log in successfully', async function () {
        const res = await chai
            .request(app)
            .post('/login')
            .send({ email: 'docente@espoch.edu.ec', password: '123456' });

        expect(res).to.have.status(200);
        expect(res.body).to.have.property('login');
    });

    it('should create a new user', function (done) {
        chai
            .request(app)
            .post('/createUser')
            .send({
                nombres: 'John Doe',
                email: 'johndoe@example.com',
                fechaNacimiento: '1990-01-01',
                rol: 'user',
            })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('msm', 'USUARIO CREADO CON EXITO');
                done();
            });
    });
});
