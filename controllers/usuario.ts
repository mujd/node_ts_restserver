import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();

  res.json({
    msg: 'getUsuarios',
    usuarios,
  });
};
export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: 'getUsuario',
        id,
        error: `No existe un usuario con id ${id}`,
      });
    }
    res.json({
      msg: 'getUsuario',
      id,
      usuario,
    });
  } catch (error) {
    res.json({
      msg: 'getUsuario',
      error,
    });
  }
};
export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeEmail = await Usuario.findOne({
      where: {
        email: body.email,
      },
    });
    if (existeEmail) {
      return res.status(400).json({
        msg: 'getUsuario',
        error: `Ya existe un usuario con el email ${body.email}`,
      });
    }
    const usuario = await Usuario.create(body);
    // const usuario = new Usuario(body);
    // await usuario.save();
    res.json({
      msg: 'postUsuario',
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'postUsuario',
      error,
    });
  }
};
export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: 'getUsuario',
        id,
        error: `No existe un usuario con id ${id}`,
      });
    }
    await usuario.update(body);
    res.json({
      msg: 'putUsuario',
      id,
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'putUsuario',
      error,
    });
  }
};
export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({
        msg: 'getUsuario',
        id,
        error: `No existe un usuario con id ${id}`,
      });
    }
    await usuario.destroy();
    res.json({
      msg: 'deleteUsuario',
      id,
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.json({
      msg: 'deleteUsuario',
      error,
    });
  }
};
