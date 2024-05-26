import { type SchemaTypeDefinition } from 'sanity'
import category from "./category";
import heroImages from "./heroImages";
import product from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, heroImages, category],
}
