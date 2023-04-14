import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){}

    /*private readonly Items: Item[] = [
        {
            name: "John",
            desc: "This is the first person",
            qty: 100
        },
        {
            name: "Bob",
            desc: "This is the Second person",
            qty: 300
        },
        {
            name: "Roe",
            desc: "This is the third person",
            qty: 200
        }
    ];

    findAll(): Item[]{
        return this.Items;
    }

    findOne(name: string): Item{
        return this.Items.find(item => item.name === name);
    }*/

    async findAll(): Promise<Item[]>{
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item>{
        return await this.itemModel.findOne({_id: id});
    }

    async createItem(item: Item): Promise<Item>{
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }
}
