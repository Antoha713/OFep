const express = require("express");
const Joi = require('joi');
const Router = express.Router();

const tasks = [
    {id: 1, sku : "sku1", name : "task 1"},
    {id: 2, sku : "sku2", name : "task 2"},
    {id: 3, sku : "sku3", name : "task 3"},
    {id: 4, sku : "sku4", name : "task 4"},
    {id: 5, sku : "sku5", name : "task 5"}
];

const taskSchema = Joi.object({
    name: Joi.string()
    //.alphanum()
    .min(5)
    .required()
});

function getMax(tasksArray){
    let Ids = tasksArray.map(item => item.id);
    return Ids.reduce((max,current) => Math.max(max, current), Ids[0]);
}

Router.route("/")
      .get((request, response) => {
            response.send(tasks);
      })
      .post((req, res) =>{
        const validationResult = taskSchema.validate(req.body);
    
        //validation
        if(validationResult.error){
            console.log(validationResult.error.message);
    
            res.status(400).send(validationResult.error.message);
            return;
        }
    
        const id = getMax(tasks)+1;
    
        const task = {
            id: id,
            sku: "sku"+ id,
            name: req.body.name
        };
    
        tasks.push(task);
    
        res.send(task);
    });

Router.route("/:id")
    .get((request, response) => {
        const task = tasks.find(item => item.id == request.params.id);
    
        if(!task) {
        response.status(404).send(`Task with id: ${request.params.id} not found`);
        return;
        }

        response.send(task);
    })
    .put((req,res) => {
        const task = tasks.find(item => item.id == req.params.id);
        
        if(!task) {
           res.status(404).send(`Task with id: ${req.params.id} not found`);
           return;
        }
    
        const validationResult = taskSchema.validate(req.body);
    
        //validation
        if(validationResult.error){
            console.log(validationResult.error.message);
    
            res.status(400).send(validationResult.error.message);
            return;
        }
    
        task.name = req.body.name;
        res.send(task);
    })
    .delete((req, res) => {
        const task = tasks.find(item => item.id == req.params.id);
        
        if(!task) {
           res.status(404).send(`Task with id: ${req.params.id} not found`);
           return;
        }
    
        const indexOfTask = tasks.indexOf(task);
        tasks.splice(indexOfTask, 1);
    
        res.status(200).send(task);
    });


module.exports = Router;