import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Brand 1',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand #${id} not found.`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId += 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (!brand) {
      return null;
    }
    const index = this.getIndex(id);
    this.brands[index] = {
      ...brand,
      ...payload,
    };
    return this.brands[index];
  }

  delete(id: number) {
    const index = this.getIndex(id);
    if (index === -1) {
      throw new NotFoundException(`Brand #${id} not found.`);
    }
    return this.brands.splice(index, 1);
  }

  private getIndex(id: number) {
    return this.brands.findIndex((item) => item.id === id);
  }
}
