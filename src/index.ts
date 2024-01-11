import express from 'express';
import homeRoutes from './routes/home';
import imageRoutes from './routes/images';

const app = express();
const port = 3000;
app.use('/', homeRoutes);
app.use('/images', imageRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
