import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema.js";
import { myStructure } from "./sanity/deskStructure.js";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
