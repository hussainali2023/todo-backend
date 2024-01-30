const Todo = require("../models/todo");

const todoController = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  //   ------------------------ Create Todo -------------------------------------------

  createTodo: async (req, res) => {
    const { title, todoMessage } = req.body;

    if (!title && !todoMessage) {
      return res.status(400).json({ error: 'Title and todoMessage are required' });
    }

    try {
      const newTodo = new Todo({ title, todoMessage });
      await newTodo.save();
      res.json(newTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },



//   ------------------------ Update Todo -------------------------------------------


  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { title, todoMessage } = req.body;

    try {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title, todoMessage },
        { new: true }
      );

      if (!updatedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }

      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

//   ------------------------ Delete Todo -------------------------------------------

  deleteTodo: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedTodo = await Todo.findByIdAndDelete(id);

      if (!deletedTodo) {
        return res.status(404).json({ error: 'Todo not found' });
      }

      res.json(deletedTodo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

};

module.exports = todoController;
