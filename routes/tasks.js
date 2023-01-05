const Task = require('../schemas/Task');
const router = require('express').Router();

//task
//buscar tarea
router.get('/tasks', async (req, res) => {
  try {
    const data = await Task.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//buscar por id
router.get('/tasks/:id', async (req, res) => {
  try {
    const data = await Task.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//elminar por id
router.delete('/tasks/:id', async (req, res) => {
  try {
    const data = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//creo la tarea
router.post('/tasks', async (req, res) => {
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
router.put('/tasks/:id', async (req, res) => {
  try {
    const datatoupdate = req.body;
    const result = await Task.findByIdAndUpdate(req.params.id, datatoupdate, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
