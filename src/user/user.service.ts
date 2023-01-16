import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePatchUserDto } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserDto) {
    // toda vez que o seu retorno seja utilizado dentro de um async, você não precisa escrever await
    return this.prisma.user.create({
      data: user,
    });
  }

  async list() {
    return this.prisma.user.findMany();
  }

  async show(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, user: CreateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async updatePartial(id: number, user: UpdatePatchUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
