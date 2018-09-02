'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/formUpload',controller.upload.formUpload);
  router.post('/formSubmit',controller.upload.formSubmit);
};