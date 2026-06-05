import { Controller, Get, Post, Body, Param, Delete, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { AllocationService } from "./allocations.module";
import { JwtAuthGuard } from "../../common/guards/jwt-auth.guard";

@ApiTags("Allocations")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("allocations")
export class AllocationsController {
  constructor(private allocationService: AllocationService) {}

  @Get()
  async findAll() {
    return this.allocationService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.allocationService.findOne(id);
  }

  @Post()
  async create(@Body() data: any) {
    return this.allocationService.create(data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.allocationService.delete(id);
  }

  @Post("bulk")
  async bulkCreate(@Body() data: any) {
    return this.allocationService.bulkCreate(
      data.nodeId,
      data.ipAddress,
      data.portStart,
      data.portEnd
    );
  }
}
