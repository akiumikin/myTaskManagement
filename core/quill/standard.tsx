import * as React from "react";
import dynamic from "next/dynamic";

const AvoidSSRCodeBase = dynamic(
  () => import('./base'), 
  {ssr: false}
)

interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function StandardQuill(props: Props) {  
  return(
    <AvoidSSRCodeBase
      value={props.value}
      setValue={props.setValue}
    />
  )
}
