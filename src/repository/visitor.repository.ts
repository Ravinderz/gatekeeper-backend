/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Inject } from '@nestjs/common';
import { DatabaseService } from 'src/service/database.service';

/* eslint-disable @typescript-eslint/no-unsafe-call */
export class VisitorRespository {

  private connection: any = null;
  private databaseService: DatabaseService;
  constructor(@Inject(DatabaseService) databaseService: DatabaseService) {
    this.databaseService = databaseService;
    if (!this.connection) {
        this.connection = this.databaseService.getConnection();
    }
  }

  async getAllVisitors() {
    const query = `SELECT * FROM visitor`;
    const results = await new Promise<any[]>((resolve, reject) =>
      this.connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }),
    );
    return results;
  }

  async getVisitorById(id: string) {
    const query = `SELECT * FROM visitor WHERE id = ${id}`;
    const results = await new Promise<any[]>((resolve, reject) =>
      this.connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }),
    );
    return results;
  }

  async getVisitorByPhone(phone: string) {
    const query = `SELECT * FROM visitor WHERE phone = ${phone}`;
    const results = await new Promise<any[]>((resolve, reject) =>
      this.connection.query(query, [phone], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }),
    );
    return results;
  }
}
