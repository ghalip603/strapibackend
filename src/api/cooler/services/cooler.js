'use strict';

/**
 * cooler service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cooler.cooler');
