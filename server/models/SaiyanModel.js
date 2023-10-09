const Sequelize = require('sequelize');


const sequelize = new Sequelize('saiyan_schema', 'root', 'Jtheking1', {
  host: 'localhost',
  dialect: 'mysql', 
});


const Saiyan = sequelize.define('Saiyan', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'Name must be between 3 and 255 characters.',
      },
    },
  },
  power_level: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: 9001,
        msg: 'Power level must be OVER 9000!!!!!!',
      },
      max: {
        args: 500000,
        msg: 'You fool, nobody is that strong, your power level must be under 500,000',
      },
    },
  },
  ultimate_attack: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'Ultimate attack must be between 3 and 255 characters.',
      },
    },
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Age must be an integer.',
      },
    },
  },
  transformation: {
    type: Sequelize.STRING,
    allowNull: true
  },
});


sequelize.sync().then(() => {
  console.log('Database and tables are synchronized.');
});

module.exports = Saiyan;

