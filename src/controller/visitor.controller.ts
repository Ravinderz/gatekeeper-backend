import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VisitorDto } from 'src/dto/visitor.dto';
import { VisitorService } from 'src/service/visitor.service';

@Controller('/visitor')
export class VisitorController {
    constructor(private visitorService: VisitorService) {}

    @Get('/visitor-stats/:apartment_number')
    getVisitorStats(@Param('apartment_number') apartment_number: string): any {
        return this.visitorService.getVisitorStats(apartment_number);
    }

    @Get('/all/:apartment_number')
    getAllVisitors(@Param('apartment_number') apartment_number: string): any {
        return this.visitorService.getAllVisitors(apartment_number);
    }

    @Get('/pending-visitors/:apartment_number')
    getPendingVisitors(@Param('apartment_number') apartment_number: string): any {
        return this.visitorService.getAllPendingVisitors(apartment_number);
    }

    @Post('/add-visitor')
    addVisitor(@Body() visitor: VisitorDto): any {
        return this.visitorService.addVisitor(visitor);
    }
}
