<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição

[Nest - Prisma](https://github.com/Hangell/nest-prisma) repositorio de exemplo.

## Criando um projeto

```bash
$ nest new nest-prisma
$ cd nest-prisma
```

## Instalando dependendencias utilizadas

```bash
$ npm i @nestjs/config class-transformer class-validator @nestjs/mapped-types
$ npm i -D prisma
$ nest g resource users
$ npx prisma init
```
#### * definir os dados de acesso ao banco de dados no arquivo .env e alterar o driver para o do banco de dados que será utilizado no arquivo /prisma/schema.prisma

## Criando o Banco de dados

#### * copiar e colar o conteudo bancoexemplo.sql no banco de dados mysql e executar

```bash
$ npx prisma db pull
$ npx prisma generate
```

## Criando Modulo do Prisma

```bash
$ nest g module prisma
$ nest g service prisma
```

## Desenvolvido por

- Author - [Rodrigo Rangel](https://www.linkedin.com/in/hangell/)
- Website - [https://hangell.org](https://hangell.org/)

## License

Nest is [MIT licensed](LICENSE).
