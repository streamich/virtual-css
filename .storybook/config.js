import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

setOptions({
  sortStoriesByKind: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: false,
});

const req = require.context('../src/', true, /.*(stories|story)\.(js|jsx|ts|tsx)?$/);

const loadStories = () => {
  const nonMd = [];
  const md = [];

  for (const filename of req.keys()) {
    if (filename.indexOf('/markdown/') > -1) {
      md.push(filename);
    } else {
      nonMd.push(filename);
    }
  }

  nonMd.forEach((filename) => req(filename));
  md.forEach((filename) => req(filename));
};

configure(loadStories, module);
