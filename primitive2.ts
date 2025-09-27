import { gzipSync, gunzip } from "node:zlib";
import { Buffer } from "node:buffer";

// Create 64MiB gzip data
const input = Buffer.alloc(64 * 1024 * 1024);
const compressed = gzipSync(input);

// Decompress it
gunzip(compressed, (err) => console.error(err));
