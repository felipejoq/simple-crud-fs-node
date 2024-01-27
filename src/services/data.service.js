import fs from 'node:fs';
import { CustomError } from '../config/errors/custom.error.js';

export class DataService {

  async readFile({ pathFile }) {
    if (this.checkFileExist({ pathFile })) {
      const data = JSON.parse(fs.readFileSync(pathFile, { encoding: 'utf-8' }));
      return data;
    }
  }

  async checkFileExist({ pathFile }) {
    try {
      if (!fs.existsSync(pathFile))
        fs.writeFileSync(pathFile, JSON.stringify([]));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async saveData({ data, pathFile }) {
    try {
      if (this.checkFileExist({ pathFile })) {
        fs.writeFileSync(pathFile, JSON.stringify(data));
        return true;
      }
    } catch (error) {
      console.error(error);
      throw CustomError.internalServer('Hubo un error inesperado.');
    }
  }

}