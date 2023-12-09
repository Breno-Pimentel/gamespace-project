// multerMiddleware.js
const multer = require("multer");
const path = require("path");

let uploadedFileName = ''; // Variável global para armazenar o nome do arquivo

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    uploadedFileName = fileName; // Salva o nome do arquivo na variável global
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

// Função que retorna o nome do arquivo
function getUploadedFileName() {
  return uploadedFileName;
}

module.exports = { upload, getUploadedFileName };
