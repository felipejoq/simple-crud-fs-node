import request from 'supertest';
import {testServer} from '../../test-server';
import {describe, beforeAll, afterAll, beforeEach, test, expect} from '@jest/globals';
import {DataService} from "../../../src/services/data.service.js";
import {envs} from "../../../src/config/plugins/envs.js";
import {SongsService} from "../../../src/services/songs.service.js";

const dataService = new DataService();
const songService = new SongsService(dataService)

const song1 = {
  id: "3c2cc1f0-96c7-48fc-9bec-51b580042136",
  title: "Rape Me",
  artist: "Nirvana",
  tone: "C"
}
const song2 = {
  id: "5f98e33f-3738-449d-9aaa-2c24655b63ce",
  title: "Creep",
  artist: "Radiohead",
  tone: "G"
}

const song3 = {
  title: "Creep",
  artist: "Radiohead",
  tone: "G"
}

describe('Teste in /song', () => {

  beforeAll(async () => {
    await dataService.saveData({
      data: [song1, song2],
      pathFile: envs.PATH_DATA,
      dataName: envs.DATA_NAME
    });

    await testServer.start();
  });

  afterAll(async () => {
    await dataService.deleteData({pathFile: envs.PATH_DATA, dataName: envs.DATA_NAME})
    testServer.close();
  });

  test('should return a list of songs', async () => {
    const {body} = await request(testServer.app)
      .get('/api/v1/song')
      .expect(200);

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toBe(2);
    expect(body).toEqual([song1, song2])

  });

  test('should return a Song api/v1/song/:idSong', async () => {
    const {body} = await request(testServer.app)
      .get(`/api/v1/song/${song1.id}`)
      .expect(200);


    expect(body).toEqual(song1)

  });

  test('Post a new Song api/v1/song', async () => {

    const {body} = await request(testServer.app)
      .post(`/api/v1/song/`)
      .send(song3)
      .expect(200);

    expect(body).toEqual(expect.objectContaining(song3))


  });

  test('delete song by id api/v1/song/:songId', async () => {
    const {body} = await request(testServer.app)
      .delete(`/api/v1/song/${song1.id}`);

    expect(body).toEqual(song1)
  })

  test('update song by id api/v1/song/:songId', async () => {
    const {body} = await request(testServer.app)
      .put(`/api/v1/song/${song1.id}`)
      .send({
        ...song1,
        title: 'New title'
      })

    expect(body.title).toEqual('New title');
  })

  test('not valid uuid api/v1/song/:songId', async () => {
    const {body} = await request(testServer.app)
      .delete(`/api/v1/song/123`)
      .expect(400)

    expect(body.error).toEqual('El id no es un UUID válido')
  })



  test('not found by uuid api/v1/song/:songId', async () => {
    const {body} = await request(testServer.app)
      .delete(`/api/v1/song/3c2cc1f0-96c7-48fc-9bec-51b580042137`)
    expect(404);

    expect(body.error).toEqual('Canción con id: 3c2cc1f0-96c7-48fc-9bec-51b580042137 no existe.')

  })

});