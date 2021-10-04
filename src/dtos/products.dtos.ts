export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto {
  // To add optional variables, just add ? symbol after the variable name.
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly stock?: number;
  readonly image?: string;
}
