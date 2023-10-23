import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-crud'),
    ArticlesModule,
  ]
})
export class AppModule {}
