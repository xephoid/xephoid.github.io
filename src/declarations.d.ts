declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.md" {
  const html: string;
  const markdown: string;
  const attributes: Record<string, string | string[]>;
  export { html, markdown, attributes };
}