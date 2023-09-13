import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]{3,30}$/.test(v);
      },
    },
  },
  aroma: {
    type: [String],
    
  },
  categoria: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
    
  },
  stock: {
    type: [Object],
    required: true,
  },
  imagenes: {
    type: Object,
    required: true,
  },
  Material: {
    type: String,
    required: true,
  },
  dimensiones: {
    type: [Object],
    required: true,
  },
  empaque: {
    type: String,
    required: true,
  },
  caracteristicas: {
    type: Object,
    required: true,
  },
  sinopsis: {
    type: String,
    
  },
  autor: {
    type: String,
    
  },
  idioma: {
    type: String,
    
  },
  idioma: {
    editorial: String,
    
  },
  paginas: {
    type: Number,
    
  },
});


export const Product = mongoose.model("producto", productSchema)