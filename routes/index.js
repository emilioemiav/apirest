const express = require("express");
const User = require("../models/User");
const Role = require("../models/Role");
const Task = require("../models/Task");
const router = express.Router();

//busca todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//buscar por id
router.get("/users/:id", async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//elminar por id
router.delete("/users/:id", async (req, res) => {
    try {
      const data = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


//creo el usuario
router.post("/users", async (req, res) => {
  const data = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    adress: req.body.adress,
  });

  try {
    const datatosave = await data.save();
    res.status(201).json(datatosave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//editar
router.put("/users/:id", async (req, res) => {
    
  
    try {
      const datatoupdate = req.body
      const result = await User.findByIdAndUpdate(req.params.id,datatoupdate,{new:true});
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


  //task
  //buscar tarea
  router.get("/tasks", async (req, res) => {
    try {
      const data = await Task.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //buscar por id
  router.get("/tasks/:id", async (req, res) => {
      try {
        const data = await Task.findById(req.params.id);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
  //elminar por id
  router.delete("/tasks/:id", async (req, res) => {
      try {
        const data = await Task.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
  
  //creo la tarea
  router.post("/tasks", async (req, res) => {
    const data = new Task({
      name: req.body.name,
      description: req.body.description,
    });
  
    try {
      const datatosave = await data.save();
      res.status(201).json(datatosave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //editar tarea
  router.put("/tasks/:id", async (req, res) => {
      
      try {
        const datatoupdate = req.body
        const result = await Task.findByIdAndUpdate(req.params.id,datatoupdate,{new:true});
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });


//role
  //buscar 
  router.get("/roles", async (req, res) => {
    try {
      const data = await Role.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //buscar por id
  router.get("/roles/:id", async (req, res) => {
      try {
        const data = await Role.findById(req.params.id);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
  //elminar por id
  router.delete("/roles/:id", async (req, res) => {
      try {
        const data = await Role.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
  
  
  //creo el rol
  router.post("/roles", async (req, res) => {
    const data = new Role({
      name: req.body.name,
      description: req.body.description,
    });
  
    try {
      const datatosave = await data.save();
      res.status(201).json(datatosave);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  //editar rol
  router.put("/roles/:id", async (req, res) => {
      
      try {
        const datatoupdate = req.body
        const result = await Role.findByIdAndUpdate(req.params.id,datatoupdate,{new:true});
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });


module.exports = router;
