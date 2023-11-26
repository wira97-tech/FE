import * as Joi from "joi"

export const paslonSchema = Joi.object({
  nama: Joi.string().required(),
  noUrut: Joi.number().required(),
  visiMisi: Joi.string().required(),
  image: Joi.string().required()
})