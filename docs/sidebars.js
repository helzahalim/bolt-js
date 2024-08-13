/**
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  sidebarJSBolt: [
    {
      type: 'doc',
      id: 'index', // document ID
      label: 'Bolt for JavaScript', // sidebar label
      className: 'sidebar-title',
    },
    'getting-started',
    {
      type: 'category',
      label: 'Basic concepts',
      items: [
        'basic/message-listening',
        'basic/message-sending',
        'basic/event-listening',
        'basic/web-api',
        'basic/action-listening',
        'basic/action-respond',
        'basic/acknowledge',
        'basic/shortcuts',
        'basic/commands',
        'basic/creating-modals',
        'basic/updating-pushing-views',
        'basic/view-submissions',
        'basic/publishing-views',
        'basic/custom-steps',
        'basic/options',
        'basic/authenticating-oauth',
        'basic/socket-mode'
      ],
    },
    {
      type: 'category',
      label: 'Advanced concepts',
      items: [
        'advanced/error-handling',
        'advanced/authorization',
        'advanced/token-rotation',
        'advanced/conversation-store',
        'advanced/global-middleware',
        'advanced/listener-middleware',
        'advanced/context',
        'advanced/deferring-initialization',
        'advanced/logging',
        'advanced/custom-routes',
        'advanced/receiver',
      ],
    },
    {
      type: 'category',
      label: 'Deployments',
      items: [
        'deployments/aws-lambda',
        'deployments/heroku'
      ],
    },
    {
      type: 'category',
      label: 'Workflow steps (Deprecated)',
      items: [
        'steps/steps',
        'steps/creating-steps',
        'steps/adding-editing-steps',
        'steps/saving-steps',
        'steps/executing-steps',
      ],
    },
    { type: 'html', value: '<hr>' },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorial/getting-started-http',
        'tutorial/hubot-migration',
        'tutorial/migration-v2',
        'tutorial/migration-v3'
      ],
    },
    { type: 'html', value: '<hr>' },
    'reference',
    { type: 'html', value: '<hr>' },
    {
      type: 'link',
      label: 'Release notes',
      href: 'https://github.com/slackapi/bolt-python/releases',
    },
    {
      type: 'link',
      label: 'Code on GitHub',
      href: 'https://github.com/SlackAPI/bolt-js',
    },
    {
      type: 'link',
      label: 'Contributors Guide',
      href: 'https://github.com/SlackAPI/bolt-js/blob/main/.github/contributing.md',
    },

  ],
};

export default sidebars;
