import Joi from 'joi';

export const createSongSchema = Joi.object({
  title: Joi.string().min(1).required()
    .error(new Error('El título es requerido y debe tener mínimo 1 carácteres')),
  artist: Joi.string().min(1).required()
    .error(new Error('El artista es requerido y debe tener mínimo 1 carácteres')),
  tone: Joi.string().min(1).required()
    .error(new Error('El tono es requerido y debe tener mínimo 1 carácteres')),
});