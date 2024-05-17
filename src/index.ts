import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

app.get("/", (c) => {
  return c.html(html`<h1>Hello, from Hono!</h1>`);
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
