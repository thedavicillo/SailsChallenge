/**
 * MessagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	list:function (req, res) {
		Messages.find({}).exec(function(err, messages){
			if (err){
				res.send(500, {error: 'Database Error'});
			}
			res.view('list', {messages:messages});
		})
	}

};

