import { constants, createGunzip, gzipSync } from "node:zlib";
import { Buffer } from "node:buffer";

// Create 64MiB gzip data
const input = Buffer.alloc(64 * 1024 * 1024);
const compressed = gzipSync(input);

// Decompress it with small chunk size
const gunzip = createGunzip({ chunkSize: 64 });
gunzip.on("data", () => {}); // keep the stream flowing so push() keeps returning true

gunzip._processChunk(compressed, constants.Z_FINISH, (err) => {
  if (err) throw err;
  console.log("gunzip finished");
});
