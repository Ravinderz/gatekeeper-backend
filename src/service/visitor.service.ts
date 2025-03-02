import { Injectable } from '@nestjs/common';
import { VisitorDto } from 'src/dto/visitor.dto';
import { VisitorRespository } from 'src/repository/visitor.repository';

@Injectable()
export class VisitorService {
    private visitorRespository: VisitorRespository;

    constructor(visitorRepository: VisitorRespository) {
        this.visitorRespository = visitorRepository;
    }

    async getAllVisitors(apartment_number: string): Promise<VisitorDto[]> {
        const result =
            await this.visitorRespository.getAllVisitors(apartment_number);
        return result;
    }

    async getVisitorById(id: string): Promise<VisitorDto> {
        const result = await this.visitorRespository.getVisitorById(id);
        return result;
    }

    async addVisitor(visitor: any): Promise<any> {
        const result = await this.visitorRespository.addVisitor(visitor);
        return result;
    }

    async getAllPendingVisitors(apartment_number: string): Promise<VisitorDto[]> {
        const result =
            await this.visitorRespository.getAllPendingVisitors(
                apartment_number
            );
        return result;
    }

    async getVisitorStats(apartment_number: string): Promise<any> {
        const result =
            await this.visitorRespository.getAllVisitors(apartment_number);

        const stats = {
            total_visitors: result.length,
            pending_visitors: result.filter(
                (visitor) => visitor.status === 'pending'
            ).length,
            approved_visitors: result.filter(
                (visitor) => visitor.status === 'approved'
            ).length,
            rejected_visitors: result.filter(
                (visitor) => visitor.status === 'rejected'
            ).length,
        };
        return stats;

    }
}
