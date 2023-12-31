import { agency } from "./schemas/agency";
import { agent } from "./schemas/agent";
import { category } from "./schemas/category";
import { property } from "./schemas/property";
import { testimonials } from "./schemas/testimonials";

export const schema = {
    types: [agent, property, category, testimonials, agency],
  }
  