/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mysql from 'mysql2';

@Injectable()
export class DatabaseService {
  private mysql = mysql;
  private connection: any = null;
  private configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
  }

    getConnection(): any {
      console.log('getting connection');
    if (this.connection) {
      return this.connection;
    }

    this.connection = this.mysql.createConnection({
      host: this.configService.get('DB_HOST'),
      user: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      port: this.configService.get('DB_PORT'),
    });

    console.log('connecting to db');

    this.connection.connect((err: Error) => {
      if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + this.connection.threadId);
    });

    return this.connection;
  }
}
