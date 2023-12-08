

const multer =require("multer");
const path =require("path");
const { promises } =require("fs");

let uploadedImagePath = ''; // Variável para armazenar o caminho da imagem

const storage = multer.diskStorage({
  destination: "./uploads/", // Especifique o diretório onde deseja salvar as imagens
  filename: function (req, file, cb) {
    const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);

    // Salvar o caminho da imagem na variável
    uploadedImagePath = path.join("./uploads/", fileName);
    saveImagePathToText(uploadedImagePath);
  },
});

const upload = multer({ storage: storage });

async function saveImagePathToText(imagePath) {
  const textFilePath = "./imagePaths.txt";

  try {
    // Adicione o caminho da imagem ao arquivo de texto
    await fs.appendFile(textFilePath, imagePath + "\n");
    console.log("Caminho da imagem salvo com sucesso!");
  } catch (err) {
    console.error("Erro ao salvar o caminho da imagem no arquivo de texto:", err);
  }
}

module.exports = { upload, uploadedImagePath };








/*
const multer = require("multer");
const path = require("path");
const fs = require("fs");

let uploadedImagePath = ''; // Variável para armazenar o caminho da imagem

const storage = multer.diskStorage({
  destination: "./uploads/", // Especifique o diretório onde deseja salvar as imagens
  filename: function (req, file, cb) {
    const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);

    // Salvar o caminho da imagem na variável
    uploadedImagePath = path.join("./uploads/", fileName);
    saveImagePathToText(uploadedImagePath);
  },
});

const upload = multer({ storage: storage });

function saveImagePathToText(imagePath) {
  const textFilePath = "./imagePaths.txt";

  // Adicione o caminho da imagem ao arquivo de texto
  fs.appendFile(textFilePath, imagePath + "\n", (err) => {
    if (err) {
      console.error("Erro ao salvar o caminho da imagem no arquivo de texto:", err);
    } else {
      console.log("Caminho da imagem salvo com sucesso!");
    }
  });
}

module.exports = upload, uploadedImagePath;
*/