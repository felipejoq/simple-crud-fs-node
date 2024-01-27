
import { envs } from '../config/plugins/envs.js';
import { CustomError } from '../config/errors/custom.error.js';
import { Song } from '../domain/models/Song.js';

export class SongsService {

  PATH_DATA = envs.PATH_DATA;

  constructor(dataService) {
    this.dataService = dataService;
  }

  async getSongs() {
    const songs = await this.dataService.readFile({ pathFile: this.PATH_DATA });
    return songs;
  }

  async getSongById({ songId }) {

    const songs = await this.getSongs();
    const song = songs.find(song => song.id === songId);

    if (!song)
      throw CustomError.notFound(`Canción con id: ${songId} no existe.`);

    return song;

  }

  async createSong(createSongDto) {

    const newSong = new Song({ ...createSongDto });

    const songs = [
      ... await this.getSongs(),
      newSong
    ]

    await this.dataService.saveData({ data: songs, pathFile: this.PATH_DATA });

    return newSong;
  }

  async updateSongById(updateSongDto) {

    const newSong = new Song({ ...updateSongDto });

    let songs = await this.getSongs();

    songs = songs.map(song => {
      if (song.id === updateSongDto.id) {
        return { ...newSong }
      }
      return song;
    })

    await this.dataService.saveData({ data: songs, pathFile: this.PATH_DATA });

    return newSong;

  }

  async deleteSongById({ songId }) {

    const song = await this.getSongById({ songId })

    let songs = await this.getSongs();

    songs = songs.filter(song => song.id !== songId)

    await this.dataService.saveData({ data: songs, pathFile: this.PATH_DATA });

    return song;

  }

}