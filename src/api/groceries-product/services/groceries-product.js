'use strict';

/**
 * groceries-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::groceries-product.groceries-product');
