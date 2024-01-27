import 'dotenv/config';
import env from 'env-var'

export const envs = {
  PORT: env.get('PORT').required().asInt(),
  PATH_DATA: env.get('PATH_DATA').required().asString()
}