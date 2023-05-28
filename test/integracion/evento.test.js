const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../view/evento'); // Asegúrate de que la ruta al archivo evento.js sea correcta

chai.use(chaiHttp);
const expect = chai.expect;

describe('Evento Integration Test', function () {

    it('should retrieve all active events', function (done) {
        chai
            .request(app)
            .get('/eventosAllActivos')
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status_code', 200);
                expect(res.body).to.have.property('msm', 'EVENTOS DISPONIBLES');
                expect(res.body).to.have.property('datos');
                done();
            });
    });

    it('should retrieve event details', function (done) {
        const eventId = 1; // Replace with a valid event ID

        chai
            .request(app)
            .get(`/detalleEvento/${eventId}`)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status_code', 200);
                expect(res.body).to.have.property('msm', 'EVENTOS DISPONIBLES');
                expect(res.body).to.have.property('datos');
                done();
            });
    });

    it('should retrieve events for a user', function (done) {
        var userEmail = 'docente@espoch.edu.ec'; // Replace with a valid user email

        chai
            .request(app)
            .post('/eventoAllInscriptoUsuario')
            .send({ email: userEmail })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status_code', 200);
                expect(res.body).to.have.property('msm', 'EVENTOS DISPONIBLES');
                expect(res.body).to.have.property('datos');
                done();
            });
    });

    it('should retrieve events from a user\'s cart', function (done) {
        const userEmail = 'docente@espoch.edu.ec'; // Replace with a valid user email

        chai
            .request(app)
            .post('/carritoEvento')
            .send({ email: userEmail })
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('status_code', 200);
                expect(res.body).to.have.property('msm', 'EVENTOS DISPONIBLES');
                expect(res.body).to.have.property('datos');
                done();
            });
    });

});