const { MongooseError  } = require('mongoose');

exports.getErrorMessage = (err) => {
    if(err instanceof MongooseError){
        return Object.values(err.errors)[0].message; //Object.values(err).at(0).message;
    } else {
        return err.message;
    }
}