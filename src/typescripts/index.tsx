/** imports */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { PersistentDrawerLeft } from './components/layout/persistentDrawer'
import { Sidemenu } from './components/layout/sidemenu'
import { Routes } from 'tsRoot/routes'

/** DOMへのrender */
// <div id='app'/> のコンポーネントが必要なことに注意
ReactDOM.render(
  <HashRouter>
    <PersistentDrawerLeft
      sidemenu={<Sidemenu/>}
      mainContent={<Routes/>}
    />
  </HashRouter>,
  document.getElementById('app')
);
