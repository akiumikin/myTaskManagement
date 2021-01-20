import * as React from "react";
import dynamic from "next/dynamic";

const AvoidSSRCodeBase = dynamic(
  () => import('../codeBase'), 
  {ssr: false}
)

export default function TextFieldComponentCode() {  
  return(
    <AvoidSSRCodeBase
      code={'.p {margin: 10px}'}
      language='css'
      fileName='form/textForm.tsx'
    />
  )
}
