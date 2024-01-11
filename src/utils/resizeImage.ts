import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

interface ResizeImageOptions {
  readonly name: string;
  readonly width?: number | undefined | null;
  readonly height?: number | undefined | null;
}

/**
 * Resize image with sharp
 * @param {ResizeImageOptions} options
 * @return {Promise<Buffer>}
 */
export default async (options: ResizeImageOptions): Promise<Buffer> => {
  const { width, height, name } = options;
  const directoryPath = path.join(__dirname, '../../images');
  const filePath = path.join(directoryPath, name);
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error('File not found');
  }
  // Read file as Buffer
  const fileAsBuffer = fs.readFileSync(filePath);
  if (!(width || height)) {
    return fileAsBuffer;
  }
  const optionsImage = {
    width: width,
    height: height,
    fit: width && height ? sharp.fit.cover : sharp.fit.inside,
  };
  // Resize image with sharp
  const base = sharp(fileAsBuffer).resize(optionsImage).jpeg();
  // Return image as Buffer
  return base.toBuffer();
};
