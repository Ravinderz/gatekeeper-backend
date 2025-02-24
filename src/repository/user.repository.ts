/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Inject } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { DatabaseService } from 'src/service/database.service';

/* eslint-disable @typescript-eslint/no-unsafe-call */
export class UserRepository {

  private connection: any = null;
  private databaseService: DatabaseService;
  constructor(@Inject(DatabaseService) databaseService: DatabaseService) {
    this.databaseService = databaseService;
    if (!this.connection) {
        this.connection = this.databaseService.getConnection();
    }
  }

  async getAllUsers() {
    const query = `SELECT * FROM user`;
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

  async getUserById(id: string) {
    const query = `SELECT * FROM user WHERE id = ${id}`;
    const results = await new Promise<any[]>((resolve, reject) =>
      this.connection.query(query, [id], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }),
    );
    return results[0];
  }

  async addUser(user: UserDto) {
    const query = `INSERT INTO user (name, email, phone, apartment_number, password, role_id) VALUES (?, ?, ?, ?, ?, (SELECT id FROM roles WHERE name = ?))`;
    const results = await new Promise<any[]>((resolve, reject) =>
      this.connection.query(query, [user.name, user.email, user.mobile, user.apartmentNumber, user.password, user.role], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      }),
    );
    return results[0];
  }
}
