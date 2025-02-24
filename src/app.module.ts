import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './service/app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from './repository/user.repository';
import { UserService } from './user/user.service';
import { DatabaseService } from './service/database.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env.local',
    }
  )],
  controllers: [AppController, UserController],
  providers: [AppService, DatabaseService, UserService, UserRepository],
})
export class AppModule {}
