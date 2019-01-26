import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from '../pages/index'
import Aware from '../pages/aware'
import Affirmations from '../pages/affirmations'
import Visualization from '../pages/visualization'
import Gratitude from '../pages/gratitude'
import Goals from '../pages/goals'
import Exercise from '../pages/exercise'

const Inner = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/aware" component={Aware} />
      <Route path="/affirmations" component={Affirmations} />
      <Route path="/visualization" component={Visualization} />
      <Route path="/gratitude" component={Gratitude} />
      <Route path="/goals" component={Goals} />
      <Route path="/exercise" component={Exercise} />
    </Switch>
  </BrowserRouter>
)

export default Inner
