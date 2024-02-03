import {describe, expect, test} from '@jest/globals'
import {CustomError} from "../../../src/config/errors/custom.error.js";

describe('Tests in the "CustomError" class', () => {

  test('should create an instance of CustomError', () => {
    const customError = CustomError.internalServer('');
    expect(customError).toBeInstanceOf(CustomError);
  });

  test('should create an internalServer CustomError', () => {
    const customError = CustomError.internalServer('Unexpected Error');
    expect(customError.statusCode).toBe(500)
    expect(customError.message).toBe('Unexpected Error');
  });

  test('should create a notFound CustomError', () => {
    const customError = CustomError.notFound('Not found');
    expect(customError.statusCode).toBe(404);
    expect(customError.message).toBe('Not found');
  });


});