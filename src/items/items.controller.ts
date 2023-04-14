import { Controller, Get, Post, Put, Delete, Param, Req, Res, Body } from '@nestjs/common';
import { ItemDtoClass } from 'src/items/dto/items.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';



@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}

    @Get()
    fetchAll(): Promise<Item[]>{
        //return "HELLO form Item";
        return this.itemService.findAll();
    }

    @Get(':id')
    fetchOne(@Param('id') id): Promise<Item>{
        //return `The Id is, ${name}`;
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: ItemDtoClass): Promise<Item>{
        //return `Name: ${createItemDto.name} Description: ${createItemDto.desc} quantity: ${createItemDto.qty}`;
        return this.itemService.createItem(createItemDto);
    }

    @Put(':id')
    update(@Param('id') id): string{
        return `The Id is, ${id}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string{
        return `The Id is, ${id}`;
    }

}
