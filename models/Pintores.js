const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PintoresSchema = new Schema({
  nombre:{
    type: String,
    required: [true, 'Requerimos el nombre']
  },
  ocupacion:{
    type: String
  },
  nacionalidad:{
    type: String
  },
  area:{
    type: String
  },
  generos:{
    type: String
  },
  biografia:{
    type: String
  },
  pintura:{
    type: String
  }
});

module.exports = mongoose.model('Pintores', PintoresSchema);