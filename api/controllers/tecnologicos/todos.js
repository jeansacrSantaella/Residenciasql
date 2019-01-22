/**
 * TodosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Todos',
    description:'todos los tecnológicos',
    inputs:{

    },
    exits:{

    },
    fn:async function (inputs,exits){
        return exits.success(await Tecnologicos.find());
    }

};

