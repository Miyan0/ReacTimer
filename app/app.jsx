var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
import Timer from 'Timer';

import Countdown from 'Countdown';

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();
// App css
require('style!css?sourceMap!sass?sourceMap!applicationStyle');



ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
