import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { config } from 'src/configs';

export async function bootstrap(module: any) {
  const app = await NestFactory.create(module);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: config.grpcUrl,
      package: 'project',
      protoPath: join(__dirname, 'project/project.proto'),
    },
  });
  await app.startAllMicroservices();

  app.setGlobalPrefix(`/api/project`);

  await app.listen(process.env.PORT || 3000);
  Logger.log(`${module?.name} started on: ${await app.getUrl()}`);
}
