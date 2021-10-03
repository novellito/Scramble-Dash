const expect = require('expect');
const request = require('supertest');
const app = require('../index').app;

describe('# words retrieved', () => {
  it('should retrieve correct # of words from sports table', (done) => {
    request(app)
      .get('/categories/sports')
      .expect((res) => {
        expect(res.body).toInclude({ data: 30 });
      })
      .end(done);
  });

  it('should retrieve correct # of words from musics table', (done) => {
    request(app)
      .get('/categories/music')
      .expect((res) => {
        expect(res.body).toInclude({ data: 30 });
      })
      .end(done);
  });
});

describe('# Highscores', () => {
  it('should retrieve all highscores', (done) => {
    request(app)
      .get('/scores/scoreList/all')
      .expect((res) => {
        expect(res.body).toInclude({ status: 200 }).toIncludeKey('data');
      })
      .end(done);
  });

  it('should retrieve all highscores for a given category', (done) => {
    request(app)
      .get('/scores/scoreList/:category')
      .expect((res) => {
        for (data in res.body.data) {
          expect(res.body.data[data].category).toBe('sports');
        }
      })
      .end(done);
  });
});
