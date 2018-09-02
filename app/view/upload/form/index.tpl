<html>
  <head>
    <title>传统表单上传</title>
  </head>
  <body>
    <form action="/formSubmit" target="a1" method="POST" enctype="multipart/form-data">
     <input type="file"  name="fileData"  />
     <input type="text" name="fileDesc" />
     <input type="submit" />
    </form>
    <iframe id="a1" name="a1"></iframe>
  </body>
</html>