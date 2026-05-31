const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

mongoose
  .connect("mongodb://localhost:27017/banco_perfume")
  .then(() => console.log("Conectado com sucesso ao banco"))
  .catch((err) => console.log("Erro ao conectar ao banco de dados"));

const PerfumeSchema = new mongoose.Schema({
  nome: String,
  especificacao: String,
  fabricante: String,
  descricao: String,
  preco: Number,
  imagem: String,
});

const Perfume = mongoose.model("Perfume", PerfumeSchema);

app.post("/api/produtos", upload.single("imagem"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "A imagem do produto é obrigatória." });
    }

    const urlImagem = `http://localhost:3000/uploads/${req.file.filename}`;

    const novoPerfume = new Perfume({
      nome: req.body.nome,
      especificacao: req.body.especificacao,
      fabricante: req.body.fabricante,
      descricao: req.body.descricao,
      preco: req.body.preco,
      imagem: urlImagem,
    });

    const dataSave = await novoPerfume.save();
    res.status(200).json(dataSave);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao salvar o perfume." });
  }
});

app.get("/api/produtos", async (req, res) => {
  try {
    const data = await Perfume.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.get("/api/produtos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Perfume.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor na porta: ${PORT}`);
});
