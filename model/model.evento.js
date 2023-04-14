const connDB = require("../config/conn")
class ModelEvento
{
    static async readModelEventoActivos()
    {
        try{
            var sql = "select E.idevento,E.costo,IF(ISNULL(E.foto_evento),'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media'," +
                "E.foto_evento) foto_evento,E.titulo,convert(E.fecha_inicio,char(150)) fecha_inicio," +
                "convert(E.fecha_fin,char(150)) fecha_fin,E.calificacion," +
                "E.idarea_tecnologica,AT.nombre_area,E.idponente,concat(P.nombre,' ',P.apellido) ponente,P.url_curriculum " +
                "from evento as E inner join area_tecnologica as AT on E.idarea_tecnologica = AT.idarea_tecnologica " +
                "inner JOIN ponente as P on E.idponente = P.idponente " +
                "where E.estado_evento = 1 and date(E.fecha_fin) >= date(now());"

            console.log(sql)

            var conn = await connDB().promise()

            var datos = await conn.query(sql)
            await conn.end()
            return datos[0]
        }catch (e) {
            console.log(e)
            return []
        }
    }

    static async readEventosInscriptosUsuario(email){

        try{
            var sql = "select convert(REL.fecha_solicitud,char(150)) fecha_solicitud,E.titulo," +
                "IF(ISNULL(E.foto_evento),'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media',E.foto_evento) foto_evento," +
                "convert(E.fecha_inicio,char(150)) fecha_inicio," +
                "convert(E.fecha_fin,char(150)) fecha_fin,concat(P.nombre,' ',P.apellido) as ponente ,E.estado_evento," +
                "P.url_curriculum from rel_usuario_evento as REL inner join usuario as U on REL.idUsuario = U.idUsuario " +
                "inner join evento as E on REL.idevento = E.idevento inner join ponente as P  on E.idponente = P.idponente " +
                "where U.email = '"+email+"' order by E.fecha_inicio desc;"
            var conn = connDB().promise()
            var datos = await conn.query(sql)

            return datos[0]
        }catch (e) {
            console.log(e)
            return []
        }
    }

    static async readCarritoEvento(email)
    {
        try{

            var sql = "select EV.titulo,convert(CE.dateCaterritoEvento,char(150)) dateCaterritoEvento,IF(ISNULL(EV.foto_evento)," +
                "'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media',EV.foto_evento) foto_evento," +
                "EV.costo from carritoEvento as CE inner join usuario as E on CE.fkEmail = E.email " +
                "inner join evento as EV on CE.fkEvento = EV.idevento where E.email = '"+email+"';"

            var conn = await connDB().promise()
            var datos = await  conn.query(sql)

            return datos[0]
        }catch (e) {
            return []
        }
    }
}

module.exports = ModelEvento