import { defineEventHandler, createError, appendHeader } from "h3";
import { pascalCase } from "scule";
// @ts-expect-error
import components from "#sse-nui/meta/nitro";

export default defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");

  const componentName = (
    (event.context.params && event.context.params["component?"]) ||
    ""
  ).replace(/\.json$/, "");

  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component",
        },
      });
    }

    return meta;
  }

  return components;
});
