const { Router } = require("express");
const express = require("express");
const Students = require("../Students");
const router = express.Router();
const students = require("../Students");

router.get("/students", (req, res) => {
  res.send(students);
});

router.get("/students/:id", (req, res) => {
  let student = students.filter(
    (student) => student.id === parseInt(req.params.id)
  );
  if (student.length === 0) {
    res.send("Student not found");
  } else {
    res.send(student);
  }
});

router.delete("/students/:id", (req, res) => {
  let student = students.filter(
    (student) => student.id !== parseInt(req.params.id)
  );
  if (student.length === 0) {
    res.send("Student not found");
  } else {
    res.send(student);
  }
});

router.post("/students", (req, res) => {
  res.send(students.concat(req.body));
});

router.put("/students/:id", (req, res) => {
  res.send(
    students.map((el) =>
      el.id === parseInt(req.params.id) ? { ...req.body, id: el.id } : el
    )
  );
});

module.exports = router;
