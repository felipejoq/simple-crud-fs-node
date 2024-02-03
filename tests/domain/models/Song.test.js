
import {beforeEach, describe, expect, jest, test} from '@jest/globals';
import {Song} from '../../../src/domain/models/Song.js';
import {getUUID} from '../../../src/config/plugins/uuid.plugin.js';

jest.mock('../../../src/config/plugins/uuid.plugin.js');

describe('Song Class', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should create an instance of Song with provided arguments', () => {
    const args = {
      title: 'Test Song',
      artist: 'Test Artist',
      tone: 'Test Tone',
      id: '123e4567-e89b-12d3-a456-426614174000',
    };

    const song = new Song(args);

    expect(song.id).toBe(args.id);
    expect(song.title).toBe(args.title);
    expect(song.artist).toBe(args.artist);
    expect(song.tone).toBe(args.tone);
  });

  test('should create an instance of Song with a generated UUID if id is not provided', () => {
    const args = {
      title: 'Test Song',
      artist: 'Test Artist',
      tone: 'Test Tone',
    };

    const generatedUUID = 'generated-uuid';
    getUUID.mockReturnValueOnce(generatedUUID);

    const song = new Song(args);

    expect(song.id).toBe(generatedUUID);
    expect(song.title).toBe(args.title);
    expect(song.artist).toBe(args.artist);
    expect(song.tone).toBe(args.tone);
    expect(getUUID).toHaveBeenCalled();
  });
});
