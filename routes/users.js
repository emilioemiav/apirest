const User = require('../schemas/User');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//elminar por id
router.delete('/:id', async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//creo el usuario
router.post('/', async (req, res) => {
  const data = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    address: req.body.address,
  });

  try {
    const datatosave = await data.save();
    res.status(201).json(datatosave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//editar
router.put('/:id', async (req, res) => {
  try {
    const datatoupdate = req.body;
    const result = await User.findByIdAndUpdate(req.params.id, datatoupdate, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
