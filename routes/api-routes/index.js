const router = require('express').Router();
const product = require('./product-routes');
const tag = require('./tags-routes');
const category = require('./category-routes');

router.use('/products', product);
router.use('/tags', tag);
router.use('/categories', category);

module.exports = router;