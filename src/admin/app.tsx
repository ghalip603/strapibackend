import type { StrapiApp } from '@strapi/strapi/admin';
import './app.css';

export default {
  config: {
    locales: [

      'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    
    console.log(app);
  },
};
