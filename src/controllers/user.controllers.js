export const obtenerUsuarios = async (req, res) => {
    res.status(200).json({message: 'Estos son todos los usuarios'})
}