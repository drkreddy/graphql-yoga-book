import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar:[
    {
      type: 'category',
      label: 'GraphQL Yoga Book',
      items: [
        '01-intro-setup',
        '02-core-concepts',
        '03-schema-design',
        '04-resolvers-context',
        '05-auth',
        '06-error-handling',
        '07-subscriptions',
        '08-integrations',
        '09-tooling-testing',
        '10-deployment',
        '11-conclusion',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
