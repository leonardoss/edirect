import express from 'express';

const router = express.Router();
const Users = require('../../models/Users');

router.get('/', function(req, res) {
  res.render('index');
});

router.route('/update').post(function(req, res) {
  const doc = {
    projects: req.body.projects,
  };
  Users.update({ _id: req.body._id }, doc, function(err, result) {
    if (err) res.send(err);
    res.send('Projects successfully updated!');
  });
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Users.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      if (user.password === password) {
        // @TODO - create token strategy
        const TOKEN = '111111111',
          payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            projects: user.projects,
          };
        res.json({
          success: true,
          user: payload,
          token: `Bearer ${TOKEN}`,
        });
      } else {
        return res.status(400).json({ error: 'Incorrect Password' });
      }
    }
  });
});

module.exports = router;
