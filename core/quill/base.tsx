import * as React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export default function QuillBase(props: Props) {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      // [{ 'direction': 'rtl' }],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      // [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean']
    ]
  }

  const formats = [
    'header', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'script',
    'list', 'bullet', 'indent',
    'color', 'background',
    'link', 'image',
    'align',
    'clean'
  ]
  
  return(
    <>
      <ReactQuill theme="snow" modules={modules} formats={formats} value={props.value} onChange={props.setValue}/>
      {props.value}
    </>
  )
}
