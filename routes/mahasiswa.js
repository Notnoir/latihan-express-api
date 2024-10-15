const express = require("express");
const router = express.Router();
const db = require("../config/database/mysql");
const controller = require("../controller/index");

router.get("/", controller.mahasiswa.getAll);
router.get("/search", controller.mahasiswa.getSearch);
router.get("/:nim", controller.mahasiswa.getOne);
router.post("/", controller.mahasiswa.post);
router.put("/:nim", controller.mahasiswa.put);
router.delete("/:nim", controller.mahasiswa.delete);

module.exports = router;
