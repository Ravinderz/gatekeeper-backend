import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserRepository } from './repository/user.repository';
import { UserService } from './user/user.service';
import { DatabaseService } from './service/database.service';
import { UserController } from './user/user.controller';
import { VisitorController } from './controller/visitor.controller';
import { VisitorService } from './service/visitor.service';
import { VisitorRespository } from './repository/visitor.repository';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(
    {
      isGlobal: true,
      envFilePath: '.env.local',
    }
  )],
  controllers: [AppController, UserController, VisitorController],
  providers: [AppService, DatabaseService, UserService, VisitorService, VisitorRespository,  UserRepository],
})
export class AppModule {}
