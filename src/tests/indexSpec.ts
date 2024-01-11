import supertest from 'supertest';
import app from '../index';
import sharp from "sharp";

const request = supertest(app);
describe('Test home responses', () => {
  it('gets the / path with status code 200', (done) => {
      request.get('/').end((err, res) => {
        if (err) {
          if (err) throw err;
        }
        expect(res.status).toBe(200);
        done();
      });
    }
  )
});

describe('Test endpoint responses', () => {
  it('gets images/santamonica.jpg original image', async () => {
    const res = await request.get('/images/santamonica.jpg');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('image/jpeg');
  })
  it('gets images/santamonica.jpg resized image', async () => {
      const width = 500;
      const height = 600;
      const res = await request.get(`/images/santamonica.jpg?width=${width}&height=${height}`);
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('image/jpeg');
      // Get image height and width
      const imageSharp = sharp(res.body);
      const metadata = await imageSharp.metadata();
      expect(metadata.width).toBe(width);
      expect(metadata.height).toBe(height);
    }
  )
});


