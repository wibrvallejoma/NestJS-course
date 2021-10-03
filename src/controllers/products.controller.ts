import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter(@Res() response: Response) {
    // Return status code with express only (More complex)
    response.status(200).send({
      message: `I am product filter`,
    });
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED) // Customize status code wth nestjs.
  getProduct(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  // ?limit=100&offset=50
  @Get()
  getProducts(
    @Query('limit') limit = 100, // default value.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products; limit => ${limit}, offset => ${offset}, brand => ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload: payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
