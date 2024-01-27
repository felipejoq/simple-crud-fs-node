import { updateSongSchema } from "./update-song.schema.js";

export class UpdateSongDto {

  constructor({ id, title, artist, tone }) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.tone = tone;
  }

  static create({ id, title, artist, tone }) {

    const result = updateSongSchema.validate({ id, title, artist, tone });

    if (result.error)
      return [result.error.message, null]

    return [null, new UpdateSongDto({ id, title, artist, tone })]
  }

}