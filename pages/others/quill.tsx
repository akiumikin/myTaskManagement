import * as React from "react";
import StandardQuill from '../../core/quill/standard';

interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function QuillBase(props: Props) {
  const [value, setValue] = React.useState('')

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'direction': 'rtl' }],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  
  return(
    <>
      <StandardQuill
        value={value}
        setValue={setValue}
      />
      {props.value}
    </>
  )
}
