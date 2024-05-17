import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

app.get("/", (c) => {
  return c.html(html`<h1>Hello, from Hono!</h1>`);
});

console.log("Server is running on port 3000");

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
