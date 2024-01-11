import express from 'express';
import resizeImage from "../utils/resizeImage";

const routes = express.Router();

routes.get('/:name', async (req, res) => {
  // Resize image with sharp
  const name = req.params.name;
  const width = req.query.width ? parseInt(req.query.width as string) : null;
  const height = req.query.height ? parseInt(req.query.height as string) : null;
  try {
    res.set('Cache-Control', 'public, max-age=604800, immutable');
    res.set('Content-Type', 'image/jpeg');
    res.send(await resizeImage({name, width, height}));
  } catch (error) {
    res.status(500);
    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'no-store, max-age=0');
    res.json({error: error.toString()});
  }
});

export default routes;
