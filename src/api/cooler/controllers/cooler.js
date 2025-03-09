'use strict';

/**
 * cooler controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cooler.cooler');
