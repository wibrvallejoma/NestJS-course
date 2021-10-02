import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello there';
  }

  @Get('new')
  newEndpoint() {
    return 'I am new';
  }

  @Get('/route/')
  hello() {
    return 'with /sas/';
  }

  @Get('/products/filter')
  getProductFilter() {
    return `I am product filter`;
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  // ?limit=100&offset=50
  @Get('products')
  getProducts(
    @Query('limit') limit = 100, // default value.
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products; limit => ${limit}, offset => ${offset}, brand => ${brand}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `product ${id} and ${productId}`;
  }
}
