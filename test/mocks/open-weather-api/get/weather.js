const responseMap = {
  'berlin': require('../_fixtures/berlin.json'),
  'hamburg': require('../_fixtures/hamburg.json'),
  'münchen': require('../_fixtures/munich.json'),
  'new york': require('../_fixtures/new-york.json'),
  'tokyo': require('../_fixtures/tokyo.json')
};

module.exports = {
  path: '/weather',
  method: 'GET',
  cache: false,
  delay: 250,
  render: function(req, res) {
    if (responseMap.hasOwnProperty(req.query.q.toLowerCase())) {
      res.send(responseMap[req.query.q.toLowerCase()]);
    } else {
      res.status(404).send();
    }
  }
};
