import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId } from "../../sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};