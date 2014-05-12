/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for user management.
 */

/**
 * Bind public controller methods.
 */
module.exports = {
    test: function(req, res){
        console.log('test')
        res.json('test')
    }
};
/*

{
    connect: function (req, res) {
        */
/*__validator.check([
            validator.rulesEmail(req.param('email')),
            validator.rulesPassword(req.param('password'))
        ], function(errors, valuesChecked){
            User.exists({email: valuesChecked.email}, function(err, user){
                if(err){
                    return res.json({message: 'DB error.', data: {code: '100', err: err}, status: false});
                }

                if(user){
                    bcrypt.compare(valuesChecked.password, user.password, function(err, result) {
                        if(err){
                            res.json({message: 'Error.', data: {code: '99', err: err}, status: false});
                        }

                        if(result === true){
                            req.session.authenticated = true;
                            req.session.user = user;
                            req.session.from = 'user';

                            return res.json({message: 'You are now connected. Enjoy it.', data: {user: user}, status: true});
                        }else{
                            return res.json({message: 'Bad password.', data: {code: '1002'}, status: false});
                        }
                    });
                }else{
                    return res.json({message: 'This user don\'t exists.', data: {code: '1001'}, status: false});
                }
            });
        }, res);*//*

    },

    create: function (req, res) {
        */
/*__validator.check([
            validator.rulesEmail(req.param('email')),
            validator.rulesPassword(req.param('password'))
        ], function(errors, valuesChecked){
            User.create(valuesChecked, function(err, user){
                if(err){
                    return res.json({message: 'DB error.', data: {code: '100', err: err}, status: false});
                }

                if(user){
                    return res.json({message: 'User created.', data: {user: user}, status: true});
                }else{
                    return res.json({message: 'Error.', data: {user: user, code: '1100'}, status: false});
                }
            });
        }, res);*//*

    },

    update: function (req, res) {
        */
/*__validator.check({
            required: [
                validator.rulesUserSessionId(req.session.user.id)
            ],
            optional: [
                validator.rulesEmail(req.param('newEmail')),
                validator.rulesPassword(req.param('newPassword'))
            ]
        }, function(errors, valuesChecked){
            if(!_.isEmpty(valuesChecked)){
                User.findOne(req.session.user.id, function(err, user){
                    if(err){
                        return res.json({message: 'DB error.', data: {code: '100', err: err}, status: false});
                    }

                    if(user = dbHelper.merge(user, valuesChecked, ['password'])){
                        user.save(function(err){
                            if(err){
                                return res.json({message: 'DB error.', data: {code: '100', err: err}, status: false});
                            }

                            return res.json({message: 'User updated.', data: {user: user}, status: true});
                        });
                    }else{
                        return res.json({message: 'User don\'t exists.', data: {}, status: false});
                    }
                });
            }else{
                return res.json({message: 'No values send. No change.', data: {user: req.session.user}, status: true});
            }
        }, res);*//*

    },

    find: function(req, res){
        */
/*__validator.check({
            'required' : [
                __validator.rulesUserSessionId(req.session.user.id)
            ],
            'optional' : [
                __validator.rulesLimit(req.param('limit'), 'limit')
            ]
        }, function(errors, valuesChecked){
            User.findOne(objectHelper.merge(valuesChecked, {id: req.session.user.id}), function(err, user){
                if(err){
                    return res.json({message: 'DB error.', data: {code: '100', err: err}, status: false});
                }

                if(user){
                    return res.json({message: 'Here are your own information.', data: {user: user}, status: true});
                }else{
                    return res.json({message: 'User don\'t exists.', data: {}, status: false});
                }
            });
        }, res);*//*

    },

    destroy: function (req, res) {
        */
/*res.json({message: 'This feature is disabled.', data: {}, status: false});*//*

    }


};
*/
