import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserDto) {
    // toda vez que o seu retorno seja utilizado dentro de um async, você não precisa escrever await
    return this.prisma.user.create({
      data: user,
    });
  }
}
