import { Inject } from '@nestjs/common';
import { VisitorDto } from 'src/dto/visitor.dto';
import { DatabaseService } from 'src/service/database.service';

export class VisitorRespository {
    private connection: any = null;
    private databaseService: DatabaseService;
    constructor(@Inject(DatabaseService) databaseService: DatabaseService) {
        this.databaseService = databaseService;
        if (!this.connection) {
            this.connection = this.databaseService.getConnection();
        }
    }

    async getAllVisitors(apartment_number: string) {
        const query = `SELECT * FROM visitor where apartment_number = ${apartment_number}`;
        const results = await new Promise<VisitorDto[]>((resolve, reject) =>
            this.connection.query(
                query,
                [apartment_number],
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                }
            )
        );
        return results;
    }

    async getVisitorById(id: string) {
        const query = `SELECT * FROM visitor WHERE id = ${id}`;
        const results = await new Promise<VisitorDto[]>((resolve, reject) =>
            this.connection.query(query, [id], (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results);
            })
        );
        return results && results[0];
    }

    async getVisitorByPhone(phone: string, apartment_number: string) {
        const query = `SELECT * FROM visitor WHERE phone = ${phone} and apartment_number = ${apartment_number}`;
        const results = await new Promise<any[]>((resolve, reject) =>
            this.connection.query(
                query,
                [phone, apartment_number],
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                }
            )
        );
        return results;
    }

    async getAllPendingVisitors(apartment_number: string) {
        const query = `SELECT * FROM visitor WHERE status = 'Pending' and apartment_number = ${apartment_number}`;
        const results = await new Promise<VisitorDto[]>((resolve, reject) =>
            this.connection.query(
                query,
                [apartment_number],
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                }
            )
        );
        return results;
    }

    async addVisitor(visitor: any) {
        const query = `INSERT INTO visitor (name, phone, apartment_number, purpose, status) VALUES (?, ?, ?, ?, 'pending')`;
        const results = await new Promise<any[]>((resolve, reject) =>
            this.connection.query(
                query,
                [
                    visitor.name,
                    visitor.mobile,
                    visitor.apartment_number,
                    visitor.purpose,
                ],
                (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                }
            )
        );
        return results[0];
    }
}
