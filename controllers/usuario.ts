import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();

  res.json({
    msg: 'getUsuarios',
    usuarios,
  });
};
export const getUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: 'getUsuario',
    id,
  });
};
export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;

  res.json({
    msg: 'postUsuario',
    body,
  });
};
export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: 'putUsuario',
    id,
    body,
  });
};
export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    msg: 'deleteUsuario',
    id,
  });
};
