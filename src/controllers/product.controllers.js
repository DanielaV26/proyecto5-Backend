import { Product } from "../models/products.models.js"


export const obtenerProductos = async (req, res) => {
  const productos = await Product.find()
  res.status(200).json({ message: 'Ok', detail: productos })
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
    const producto = await Product.find({ categoria: { $regex: new RegExp(productCategory, "i") } })

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'OK', producto });
  } catch (error) {

    res.status(500).json({ message: 'Error del servidor' });
  }
};

export const obtenerFavoritos = async (req, res) => {
  const ids = req.body
  try {

    /* Product.find({ '_id': { $in: ids}})
     Product es el modelo que se conecta a la coleccion de productos en la base de datos
     find es el metodo que busca dentro de la base de datos 
     Lo que esta dentro de find es una query que trae los productos que estan incluidos en el arreglo segun el id */

    const favoritos = await Product.find({ '_id': { $in: ids } })
    // const favorites = (await Product.find().where('_id')).in(ids).exec()
    res.status(200).json({ message: 'Productos traidos con éxito', favoritos })
  } catch (error) {
    res.status(500).json({message:'Productos no encontrados', error})

  }
}