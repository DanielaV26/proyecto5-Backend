import { Product } from "../models/products.models.js"


export const obtenerProductos =  async ( req, res) =>{
    const productos = await Product.find()
res.status(200).json({message:'Ok', detail:productos})
}


export const obtenerProductoporid = async (req, res) => {
    try {
        //con req.params obtenemos la info del la coleccion productos
      const productId = req.params.id;
      const producto = await Product.findById(productId);
  
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      res.status(200).json({ message: 'OK', producto });
    } catch (error) {
  
      res.status(500).json({ message: 'Error del servidor' });
    }
  };


  export const obtenerProductoporcategoria = async (req, res) => {
    try {
        //con req.params obtenemos la info del la coleccion productos
      const productCategory = req.params.categoria;
      //con product.find obtenemosproductos segun la query que ingresemos y { $regex: new RegExp(productCategory, "i")} nos hace que la query sea case insensitive y se le llama "expresión regular"
      const producto = await Product.find({categoria: { $regex: new RegExp(productCategory, "i")}})
  
      if (!producto) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      res.status(200).json({ message: 'OK', producto });
    } catch (error) {
  
      res.status(500).json({ message: 'Error del servidor' });
    }
  };