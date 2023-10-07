// import * as dotenv from 'dotenv';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

/* dotenv.config();
export const projectId= process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion= process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const basePath = process.env.NEXT_PUBLIC_SANITY_BASE_PATH; */

const config = defineConfig({
  projectId: 'zwdbupgo',
  dataset: 'first',
  title: 'My Personal Website',
  apiVersion: '2021-10-21',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
});

export default config;
