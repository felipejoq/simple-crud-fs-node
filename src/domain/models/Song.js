import { getUUID } from "../../config/plugins/uuid.plugin.js";

export class Song {

  constructor(args) {

    const { title, artist, tone, id = this.getId() } = args;

    this.id = id
    this.title = title;
    this.artist = artist;
    this.tone = tone;

  }

  getId() {
    return getUUID();
  }
}