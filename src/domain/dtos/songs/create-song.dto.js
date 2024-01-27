import { createSongSchema } from "./create-song.schema.js";

export class CreateSongDto {

  constructor({ title, artist, tone }) {
    this.title = title;
    this.artist = artist;
    this.tone = tone;
  }

  static create({ title, artist, tone }) {

    const result = createSongSchema.validate({ title, artist, tone });

    if (result.error)
      return [result.error.message, null]

    return [null, new CreateSongDto({ title, artist, tone })]
  }

}