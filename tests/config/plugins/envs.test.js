import 'dotenv/config';
import {envs} from '../../../src/config/plugins/envs.js';
import {describe, expect, test} from "@jest/globals";

describe('Tests in envs object', () => {

  test('should get PORT from environment variables', () => {
    expect(envs.PORT).toBe(5001);
  });

  test('should get PATH_DATA from environment variables', () => {
    expect(envs.PATH_DATA).toBe('./tests/data');
    expect(envs.DATA_NAME).toBe('songs.json');
  });

});
