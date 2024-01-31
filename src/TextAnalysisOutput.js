import React from 'react'

export default function TextAnalysisOutput(props) {
  return (
    <div className='container-fluid p-3' style={{backgroundColor:props.mode.mode==='light'?'#e8e3e4':'#e8e3e4'}}>
        <h3 className='p-3' style={{textAlign:'center'}}>{props.title}</h3>
        <div>
            <p>Number of character: {props.text.length}</p>
            <p>Times taken to read: {props.text.length*0.08}</p>
            <div>{props.result}</div>
        </div>
    </div>
  )
}
