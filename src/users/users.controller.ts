import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';

const users : User[]=[
    {
        id:0,
        lastname:'Doe',
        firstname:'Jhon'
    }
]

@Controller('users')
export class UsersController {
    @Get()
    getAll() : User[] {
        return(users);
    }

    @Get(':id')
    getById(@Param() parameter): User {
        let list = users.filter(utilisateur => utilisateur.id === parameter.id);
        
        if (list[0] !== undefined) {
            return list[0];
        }else { 
            throw new NotFoundException;
        }
    }

    @Post()
    create(@Body() input:any):User {
        let user1 : User = new User(users.length, input.lastname, input.firstname);
        users.push(user1);
        return user1;
    }
}
