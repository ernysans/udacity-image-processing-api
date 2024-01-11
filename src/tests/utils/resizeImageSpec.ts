import sharp from 'sharp';
import resizeImage from '../../utils/resizeImage';

describe('Test resizeImage function', () => {
  const fileName = 'santamonica.jpg';
  beforeEach(async function () {});
  it(`Gets ${fileName} original file`, async () => {
    // Original Image Size: 1920x1273
    const width = 1920;
    const height = 1273;
    const image = await resizeImage({ name: fileName });
    const imageSharp = sharp(image);
    const metadata = await imageSharp.metadata();
    expect(metadata.width).toBe(width);
    expect(metadata.height).toBe(height);
  });

  it(`Gets ${fileName} resized file: width and height`, async () => {
    const width = 500;
    const height = 600;
    const image = await resizeImage({ name: fileName, height, width });
    const imageSharp = sharp(image);
    const metadata = await imageSharp.metadata();
    expect(metadata.width).toBe(width);
    expect(metadata.height).toBe(height);
  });

  it(`Gets ${fileName} resized file: width and NO height`, async () => {
    const width = 500;
    const image = await resizeImage({ name: fileName, width });
    const imageSharp = sharp(image);
    const metadata = await imageSharp.metadata();
    expect(metadata.width).toBe(width);
  });

  it(`Gets ${fileName} resized file: height and NO width`, async () => {
    const height = 600;
    const image = await resizeImage({ name: fileName, height });
    const imageSharp = sharp(image);
    const metadata = await imageSharp.metadata();
    expect(metadata.height).toBe(height);
  });
});
