import * as React from "react";
import { Link } from 'react-router-dom';

export function AboutIndex() {
  return(
    <>
      <h1>AboutTopContent</h1>
      <Link to='/'>top</Link>
      <Link to='/form'>form</Link>
    </>
  )
}
