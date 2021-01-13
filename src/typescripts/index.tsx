/** imports */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CONSTANT } from 'tsRoot/constant'
import { BrowserRouter } from 'react-router-dom'
import { PersistentDrawerLeft } from './components/layout/persistentDrawer'
import { Sidemenu } from './components/layout/sidemenu'
import { Routes } from 'tsRoot/routes'

/** DOMへのrender */
// <div id='app'/> のコンポーネントが必要なことに注意
ReactDOM.render(
  <BrowserRouter basename={`/${CONSTANT.REPOSITRY_NAME}`}>
    <PersistentDrawerLeft
      sidemenu={<Sidemenu/>}
      mainContent={<Routes/>}
    />
  </BrowserRouter>,
  document.getElementById('app')
);
