import React from 'react'

export default function AboutUs(props) {
  return (
    <div className='container-fluid p-3' style={{backgroundColor:props.mode.mode==='light'?'#e8e3e4':'#e8e3e4'}}>
        <h3 className='p-3' style={{textAlign:'center'}}>{props.title}</h3>
        <div>
            Text analysis Tool is a simple tool that helps to transform the text or paragraph.
        </div>
    </div>
  )
}
