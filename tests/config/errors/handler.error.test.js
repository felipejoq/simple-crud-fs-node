import {handleError} from "../../../src/config/errors/handler.error.js";
import {describe, expect, jest, test} from "@jest/globals";
import {CustomError} from "../../../src/config/errors/custom.error.js";

describe('Test in "handleError" function', () => {
  test('should handle CustomError correctly', () => {

    const customError = new CustomError(404, 'Not Found');

    const mockResponse = {
      status: jest.fn(() => mockResponse),
      json: jest.fn()
    };

    handleError(customError, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Not Found' });
  });


  test('should handle non-CustomError correctly', () => {
    const mockError = new Error('Some error');

    const mockResponse = {
      status: jest.fn(() => mockResponse),
      json: jest.fn()
    };

    handleError(mockError, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });
});