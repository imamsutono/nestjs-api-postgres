import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
