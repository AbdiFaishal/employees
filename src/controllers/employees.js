const { Employees } = require('../../models');
const Joi = require('joi');

// Schema for validation
const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone_number: Joi.string().min(10).max(16).required(),
  jobtitle: Joi.string().max(25).required(),
});

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employees.findAll({
      attributes: ['id', 'name', 'phone_number', 'jobtitle'],
    });

    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.getDetailEmployees = async (req, res) => {
  try {
    const employees = await Employees.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'phone_number', 'jobtitle'],
    });

    if (!employees) {
      return res.status(200).send({});
    }

    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.addEmployees = async (req, res) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const employees = await Employees.create({
      ...req.body,
    });

    const { id, name, phone_number, jobtitle } = employees;

    res.status(201).send({
      id,
      name,
      phone_number,
      jobtitle,
    });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.updateEmployees = async (req, res) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const employees = await Employees.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!employees[0]) {
      return res.status(400).send({});
    }

    const updatedEmployees = await Employees.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'phone_number', 'jobtitle'],
    });

    res.status(200).send(updatedEmployees);
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.deleteEmployees = async (req, res) => {
  try {
    const employees = await Employees.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!employees) {
      return res.status(400).send();
    }

    res.status(204).send();
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
