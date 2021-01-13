import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AboutIndex } from 'tsRoot/about/aboutTop';
import { FormIndex } from 'tsRoot/form/formIndex';
import { NotFound } from 'tsRoot/notFound/notFound';

export function Routes() {
  return(
    <Switch>
      <Route exact path='/' component={AboutIndex} />
      <Route path='/form' component={FormIndex} />
      <Route component={NotFound} />
    </Switch>
  )
}
