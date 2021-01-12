/** imports */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PersistentDrawerLeft } from './components/layout/persistentDrawer'
import { Sidemenu } from './components/layout/sidemenu';
import { PersistentDrawerMainContent } from './components/layout/persistentDrawerMainContent'

/** DOMへのrender */
// <div id='app'/> のコンポーネントが必要なことに注意
ReactDOM.render(
  <PersistentDrawerLeft
    sidemenu={<Sidemenu/>}
    mainContent={<PersistentDrawerMainContent/>}
  />,
  document.getElementById('app')
);
