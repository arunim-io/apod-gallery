// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      APOD_API_KEY: envField.string({ access: "secret", context: "server" }),
    }
  }
});
