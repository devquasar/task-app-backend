import {
  Controller,
  Request,
  Res,
  Post,
  HttpStatus,
  Body,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { Connection, Repository } from 'typeorm';
import { Admin } from '../../admin/model/admin.entity';

@Controller('auth')
export class AuthController {
  private adminRepository: Repository<Admin>;
  constructor(
    private authService: AuthService,
    private connection: Connection,
  ) {
    this.adminRepository = this.connection.getRepository(Admin);
  }

  @Post('/register')
  async register(@Body() admin) {
    return this.authService.addUser(admin);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('refresh')
  async refresh(@Request() req) {
    const admin = await this.adminRepository.findOne(req.user.id);
    return this.authService.login(admin);
  }
}
