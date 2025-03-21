import { readFile, writeFile } from "fs/promises";

import { getPlaiceholder } from "plaiceholder";
import path from "path";

// Image paths
const imagePaths = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

// Process images and generate blur placeholders
async function generateBlurData() {
  const imagesWithBlur = [];

  for (const image of imagePaths) {
    try {
      const imagePath = path.join(
        process.cwd(),
        "src/app/photo-feed/photos",
        image,
      );
      const buffer = await readFile(imagePath);

      const { base64 } = await getPlaiceholder(buffer);

      imagesWithBlur.push({
        id: image.split(".")[0], // Extract ID from filename
        src: `/photos/${image}`,
        blurDataURL: base64,
      });

      console.log(`✅ Processed ${image}`);
    } catch (error) {
      console.error(`❌ Error processing ${image}:`, error?.message);
    }
  }

  // Save output to a file (JSON)
  const outputPath = path.join(process.cwd(), "public/wonders.json");

  await writeFile(outputPath, JSON.stringify(imagesWithBlur, null, 2));

  console.log("✅ BlurDataURLs generated and saved to wonders.json!");
}

// Run the script
generateBlurData();
