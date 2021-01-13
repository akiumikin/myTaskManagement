/** imports */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PersistentDrawerLeft } from './components/layout/persistentDrawer'
import { Sidemenu } from './components/layout/sidemenu'
import { Routes } from 'tsRoot/routes'

/** DOMへのrender */
// <div id='app'/> のコンポーネントが必要なことに注意
ReactDOM.render(
  <BrowserRouter>
    <PersistentDrawerLeft
      sidemenu={<Sidemenu/>}
      mainContent={<Routes/>}
    />
  </BrowserRouter>,
  document.getElementById('app')
);
