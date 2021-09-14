const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const upload = require('express-fileupload');

port = 3000;
app.use(upload());
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});
//add the router
app.use('/', router);
router.post('/', (req, res) => {
  if (req.files) {
    const file = req.files.file;
    const filename = file.name;
    file.mv('./root/' + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send(
          `file upload Sucess recent file url:  localhost:${port}/${filename}`
        );
      }
    });
  }
});
app.use(express.static('./root'));
app.listen(port);

console.log('Running at Port 3000');
