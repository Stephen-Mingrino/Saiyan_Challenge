const { Op } = require('sequelize');
const Saiyans = require('../models/SaiyanModel');

module.exports.findAllSaiyans = async (req, res) => {
  try {
    const { name, power_level, ultimate_attack, age, transformation } = req.query;
console.log("1")
    const whereClause = {
      name: { [Op.like]: `%${name}%` },
      power_level: { [Op.gte]: power_level },
      ultimate_attack: { [Op.like]: `%${ultimate_attack}%` },
      age: { [Op.eq]: age },
      transformation: { [Op.like]: `%${transformation}%` },
    };
    console.log("2")
    const allSaiyans = await Saiyans.findAll();
    console.log(allSaiyans,"these are the saiyans")
    res.json(allSaiyans);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.findOneSaiyans = async (req, res) => {
  try {
    const { id } = req.params;
    const oneSaiyan = await Saiyans.findByPk(id);
    if (!oneSaiyan) {
      return res.status(404).json({ error: 'Saiyan not found' });
    }
    res.json(oneSaiyan);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.createSaiyan = async (req, res) => {
  try {
    const { name, power_level, ultimate_attack, age, transformation } = req.body;

    const newSaiyan = await Saiyans.create({
      name,
      power_level,
      ultimate_attack,
      age,
      transformation,
    });

    res.json(newSaiyan);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.updateSaiyan = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, power_level, ultimate_attack, age, transformation } = req.body;

    const [updatedRows] = await Saiyans.update(
      {
        name,
        power_level,
        ultimate_attack,
        age,
        transformation,
      },
      {
        where: { id },
      }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Saiyan not found' });
    }

    const editedSaiyan = await Saiyans.findByPk(id);

    res.json(editedSaiyan);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.deleteSaiyan = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSaiyan = await Saiyans.destroy({
      where: { id },
    });
    if (deletedSaiyan === 0) {
      return res.status(404).json({ error: 'Saiyan not found' });
    }
    res.json({ message: 'Saiyan deleted successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
};

