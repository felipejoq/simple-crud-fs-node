import { v4 as uuid, validate } from 'uuid';
import { getUUID, isUUID } from '../../../src/config/plugins/uuid.plugin.js';
import { beforeEach, describe, expect, jest, test } from "@jest/globals";

jest.mock('uuid');

describe('UUID Functions', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getUUID should return a valid UUID', () => {
    const mockUUID = 'f21506fd-1ef1-45fe-8080-2dd283126c65';
    uuid.mockReturnValueOnce(mockUUID);

    const result = getUUID();

    expect(result).toBe(mockUUID);
    expect(uuid).toHaveBeenCalled();
  });

  test('isUUID should return true for a valid UUID', () => {
    const validUUID = 'f21506fd-1ef1-45fe-8080-2dd283126c65';

    validate.mockReturnValueOnce(true);

    const result = isUUID(validUUID);

    expect(result).toBe(true);
    expect(validate).toHaveBeenCalledWith(validUUID);
  });

  test('isUUID should return false for an invalid UUID', () => {
    const invalidUUID = 'invalid-uuid';

    validate.mockReturnValueOnce(false);

    const result = isUUID(invalidUUID);

    expect(result).toBe(false);
    expect(validate).toHaveBeenCalledWith(invalidUUID);
  });
});
