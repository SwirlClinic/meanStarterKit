//Required packages
var express = require('express');
var Bear     = require('./models/bear');


//Routes for the api
var router = express.Router();

router.use(function(req, res, next) {
	console.log("something is happenin");
	next();
});


//test route
router.get('/', function(req,res) {
	res.json(
			{
				message: 'welcome',
				blah: "blah blah"
			}
		);
});

router.get('/gayyyy', function(req,res) {
	res.json(
			{
				message: 'gay',
				blah: "blah basdsalaah"
			}
		);
});


router.route('/bears')

    // create a bear (accessed at POST http://localhost:65000/api/bears)
    .post(function(req, res) {
    	console.log(req.body.name);
        
        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)
        //console.log(bear);
        // save the bear and check for errors
        bear.save(function(err) {
        	console.log("ASDAS");
            if (err)
                res.send(err);

            //console.log("ASDAS");
            res.json({ message: 'Bear created!' });
        });
        
    })
    .get(function(req,res) {
    	Bear.find(function(err, bears) {
    		if (err) {
    			res.send(err);
    		}
    		res.json(bears);
    	});
    });


router.route('/bears/:bear_id')
	.get(function(req,res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if(err)
				res.send(err);
			res.json(bear);
		});
	})
	.put(function(req,res) {
		
		Bear.findById(req.params.bear_id, function(err, bear) {
			if(err)
				res.send(err);

			bear.name = req.body.name;

			bear.save(function(err) {
				if (err)
					res.send(err);
				res.json(
							{
								message: "Bear updated to " + req.body.name
							}
						);
			});
		});

	});


module.exports = router;