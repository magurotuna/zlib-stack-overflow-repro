# node:zlib stack overflow repro

This repository demonstrates how Deno's `node:zlib` causes stack overflow.

## Realistic Example

`realistic.ts` is a simple program that uses `npm:kuromojin`.

### How to reproduce

Just run:

```shell
deno run --allow-env=KUROMOJIN_DIC_PATH --allow-read realistic.ts
```

You can see something like this:

```
error: Uncaught (in promise) RangeError: Maximum call stack size exceeded
    at Zlib.processCallback (node:zlib:487:8)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
    at Zlib.processCallback (node:zlib:459:12)
```

## More Primitive Example

`primitive.ts` directly uses `node:zlib` and can reproduce the issue.

```shell
deno run primitive.ts
```

## Additional Info

```shell
❯ deno --version
deno 2.5.1 (stable, release, aarch64-apple-darwin)
v8 14.0.365.4-rusty
typescript 5.9.2
```

This issue seems to have started to occur since https://github.com/denoland/deno/commit/5cfe47abc3b0538b4f7f315fcf113232623069a3

