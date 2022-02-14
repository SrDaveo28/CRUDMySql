//importamos el modelo
import BlogModel from "../models/blogModel.js";

/* Métodos del crud */


//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();

        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Mostrar un registro 

export const getBlog = async (req, res) => {
    try {

        const { id } = req.params;


        const blog = await BlogModel.findAll({
            where: { id: id }
        });
        res.json(blog[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
}

//Crear un registro
export const createBlog = async (req, res) => {
    try {

        /* const { title, content } = req.body; */

        const newBlog = await BlogModel.create(req.body);

        res.json({
            message: "Creado correctamente",
            data: newBlog
        });

    } catch (error) {
        res.json({ message: error.message });
    }
}

//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        });

        res.json({
            message: "Actualizado correctamente",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        });

        res.json({
            message: "Eliminado correctamente",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
