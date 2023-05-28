const connDB = require("../config/conn")
class ModelTaller
{
    static async readModelTallerActivos()
    {
        try{
            var sql = "select T.idtaller idCode,IF(ISNULL(T.fotos_taller)," +
                "'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media',T.fotos_taller) foto," +
                "T.titulo_taller titulo,convert(T.fecha_inicio_taller,char(150)) fechaI," +
                "convert(T.fecha_fin_taller,char(150)) fechaF,T.idarea_tecnologica,T.costo,T.aula,T.cupo,AT.nombre_area," +
                "T.idponente,concat(P.nombre,' ',P.apellido) ponente,P.url_curriculum " +
                "from taller as T inner join area_tecnologica as AT on T.idarea_tecnologica = AT.idarea_tecnologica " +
                "inner JOIN ponente as P on T.idponente = P.idponente where T.estado_taller = 1 and T.fecha_fin_taller >= date(now());"

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

    static async readModelDetalleTaller(taller)
    {
        try{
            var sql = "select T.idtaller as idCode," +
                "IF(ISNULL(T.fotos_taller),'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media',T.fotos_taller)  as foto,concat(T.fecha_inicio_taller,' hasta '," +
                "time(T.fecha_fin_taller)) as fecha,concat('AULA : ',T.aula) detalles,T.titulo_taller as titulo," +
                "T.costo as costo,concat(P.nombre,' ',P.apellido) ponente,P.url_curriculum from taller as T " +
                "inner join ponente P on T.idponente = P.idponente where T.idtaller = "+taller

            console.log(sql)

            var conn = await connDB().promise()

            var datos = await conn.query(sql)
            await conn.end()
            return datos[0]
        }catch (e) {
            console.log(e)
            return null
        }
    }

    static async readTallerInscriptosUsuario(email){

        try{
            var sql = "select convert(REL.fecha_solicutud,char(150)) fecha_solicutud,T.titulo_taller,T.costo," +
                "T.aula,IF(ISNULL(T.fotos_taller),'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media'," +
                "T.fotos_taller) fotos_taller,convert(T.fecha_inicio_taller,char(150)) fecha_inicio_taller," +
                "convert(T.fecha_fin_taller,char(150)) fecha_fin_taller,concat(P.nombre,' ',P.apellido) as ponente ,T.estado_taller," +
                "P.url_curriculum from rel_usuario_taller as REL inner join usuario as U on REL.idUsuario = U.idUsuario " +
                "inner join taller as T on REL.idtaller = T.idtaller inner join ponente as P  on T.idponente = P.idponente " +
                "where U.email = 'docente@espoch.edu.ec' order by T.fecha_inicio_taller desc"
            var conn = connDB().promise()
            var datos = await conn.query(sql)

            return datos[0]
        }catch (e) {
            console.log(e)
            return []
        }
    }

    static async readCarritoTaller(email)
    {
        try{

            var sql = "select EV.titulo_taller,CE.dateCarritoTaller," +
                "IF(ISNULL(EV.fotos_taller),'https://firebasestorage.googleapis.com/v0/b/ces-expres.appspot.com/o/descarga.jpg?alt=media'," +
                "EV.fotos_taller) foto_taller,EV.costo from carritoTaller as CE inner join usuario as E on CE.fkEmail = E.email " +
                "inner join taller as EV on CE.fkTaller = EV.idtaller where E.email = '"+email+"';"

            var conn = await connDB().promise()
            var datos = await  conn.query(sql)

            return datos[0]
        }catch (e) {
            return []
        }
    }


    static async readParticipanteTaller()
    {
        try{

            var sql = "select T.titulo_taller as titulo,convert(date(T.fecha_fin_taller),char(150)) fecha,U.nombres," +
                "U.email from taller as T inner join rel_usuario_taller as RT on T.idtaller = RT.idtaller " +
                "inner join usuario as U on RT.idUsuario = U.idUsuario"

            var conn = await connDB().promise()
            var datos = await  conn.query(sql)

            return datos[0]
        }catch (e) {
            return []
        }
    }
}

module.exports = ModelTaller