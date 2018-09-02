'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async formUpload(ctx) {
    await ctx.render('upload/form/index.tpl');
  }
  async formSubmit(ctx,next){
    //console.log(ctx.req.rawHeaders);
    ctx.req.on('data', function (data) {
        console.log('==================');
        //console.log(data);
    }).on('end',function(){
        console.log('end');
    });
    //await next();
    //
    //console.log(ctx.req);
    //const stream = await ctx.getFileStream();
    //stream.pipe(process.stdout)
    //console.log(stream.filename);
    ctx.body = '上传成功';
  }
}

module.exports = UploadController;