import { a as defineEventHandler, g as getQuery } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'ipx';

const hello = defineEventHandler((event) => {
  const query = getQuery(event);
  const from = query.from || "Tairo";
  return `Hello ${from}!`;
});

export { hello as default };
