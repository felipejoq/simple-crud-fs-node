import { v4 as uuid, validate } from 'uuid';

export const getUUUID = () => {
  return uuid();
}

export const isUUID = (uuid) => {
  return validate(uuid);
}