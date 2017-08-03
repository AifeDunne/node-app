var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('mongodb://aife_admin:mdVbEnThoHs8f4ZL@ds157282.mlab.com:57282/heroku-app', ['dataList']);

// Get All Tasks
router.get('/tasks', function(req, res, next){
    db.dataList.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    db.dataList.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
	var ctont = task.contentType;
	var bcont = task.boxContent;
        db.dataList.update({_id: mongojs.ObjectId(req.params.id)}, {box:1, contentType:ctont, boxContent:bcont},{}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
    
});

module.exports = router;