'use strict';

/**
 * poptin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::poptin.poptin');
