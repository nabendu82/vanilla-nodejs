const data = require('./data');

class Controller {
    //Getting all todos
    async getTodos() {
        return new Promise((resolve, _) => resolve(data));
    }

    //Getting a single todo
    async getTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find(todo => todo.id === parseInt(id));
            if(todo){
                resolve(todo);
            } else {
                reject(`Todo with id ${id} not found`);
            }
        })
    }

    //Creating a todo
    async createTodo(todo) {
        return new Promise((resolve, _) => {
            let newTodo = {
                id: Math.floor(4 + Math.random() * 10),
                ...todo
            }

            resolve(newTodo);
        })
    }

    //Updating a todo
    async updateTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find(todo => todo.id === parseInt(id));

            if(!todo) {
                reject(`No todo with id ${id} found`);
            }
            todo['completed'] = true;
            resolve(todo);
        })
    }

    //Deleting a todo
    async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find(todo => todo.id === parseInt(id));

            if(!todo) {
                reject(`No todo with id ${id} found`);
            }
            resolve(`Todo deleted successfully`);
        })
    }
}

module.exports = Controller;