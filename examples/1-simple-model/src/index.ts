import 'reflect-metadata';

import { Server } from '../../../src/';

async function bootstrap() {
  const server = new Server({
    introspection: true,
    warthogImportPath: '../../../src' // Path written in generated classes
  });

  return server.start();
}

bootstrap().catch((error: Error) => {
  console.error(error);
  if (error.stack) {
    console.error(error.stack!.split('\n'));
  }
  process.exit(1);
});
