// eslint-disable-next-line import/no-self-import
const multer = require("./multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: (req, file, callBack) => {
    const ext = file.mimetype.split("/")[1];
    const fileName = file.originalname.substring(
      0,
      file.originalname.lastIndexOf(".")
    );
    callBack(null, `${fileName}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
