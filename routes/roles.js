const Role = require('../schemas/Role');
const router = require('express').Router();

//role
//buscar
router.get('/', async (req, res) => {
  try {
    const data = await Role.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//buscar por id
router.get('/:id', async (req, res) => {
  try {
    const data = await Role.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//elminar por id
router.delete('/:id', async (req, res) => {
  try {
    const data = await Role.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//creo el rol
router.post('/', async (req, res) => {
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
router.put('/:id', async (req, res) => {
  try {
    const datatoupdate = req.body;
    const result = await Role.findByIdAndUpdate(req.params.id, datatoupdate, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
