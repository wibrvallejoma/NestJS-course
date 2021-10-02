import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return {
      message: `I am product filter`,
    };
  }

  @Get(':productId')
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
  create() {
    return {
      message: 'Create action',
    };
  }
}
