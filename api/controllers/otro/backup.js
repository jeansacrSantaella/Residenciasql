/**
 * BackupController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'BACKUP',
    description: 'GENERAR RESPALDO',
    inputs:{
    },
    exits:{
    },

    fn:async function(inputs,exits){
        var consulta = "mysqldump --opt -h 127.0.0.1:3306 -u root -p LeonardoDavinci endo2018 | gzip > respaldo.gz";
        //var consulta ='mysqldump -u root -p endo2018 > backup.sql        ';
        // Send it to the database.
        var rawResult = await sails.sendNativeQuery(consulta);
        
        sails.log(rawResult);
        // (result format depends on the SQL query that was passed in, and the adapter you're using)
        
        // Then parse the raw result and do whatever you like with it.
        
        return exits.success();
}
};
