import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextAnalysisOutput from './TextAnalysisOutput';
import { Navigate, NavigationType, useNavigation } from 'react-router-dom';


export default function Home(props) {
  const[result,setResult]=useState('');
  const[text,setText]=useState('');
  const handleTextChange=(text)=>{
    setText(text);
  }
  const handleUpperCase=()=>{
    setResult(text.toUpperCase());
  };

  const handleLowerCase=()=>{
    setResult(text.toLowerCase());
  };

  const handleCapitalCase=()=>{
    let capitalCase=text.split(' ').map(str=>{
        return str.charAt(0).toUpperCase() +''+ str.slice(1).toLowerCase() +' ';
    });
    setResult(capitalCase);
  };

  const handleInverseCase=()=>{
    let InverseCase=text.split(' ').map(str=>{
        return str.charAt(0).toLowerCase() +''+str.slice(1).toUpperCase();
    });
    setResult(InverseCase);
  };

  const handleAlternativeCase=()=>{
    let AlternativeCase=text.split(' ').map(str=>{
        let strCase=str.split('').map((chr,index)=>{
            alert(chr);
            if(index%2===0){
                return chr.toUpperCase();
            }else{
                return chr.toLowerCase();
            }
        });        
        return strCase;
    });
    setResult(AlternativeCase);
  };

  const handleCopy=()=>{
    var textAnalysis=document.getElementById('textAnalysis');
    textAnalysis.select();
    navigator.clipboard.writeText(textAnalysis.value);
 }

 const handleRemoveXtraSpace=()=>{
    let data=text.split(/[ ]+/);
    setResult(data.join(" "));
 };

 const handleClear=()=>{
    setResult('');
    setText('');
 }
 
 return (
    <>
        <div className='container-fluid p-3' style={{backgroundColor:props.mode.mode==='light'?'#e8e3e4':'#e8e3e4'}}>
            <h3 className='p-3' style={{textAlign:'center'}}>{props.title}</h3>
            <div>
                <textarea id='textAnalysis' rows="8" value={text}  onChange={event=>handleTextChange(event.target.value)} style={{width:'100%'}}></textarea>
            </div>
            <div>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'}`} onClick={handleUpperCase} style={{width:'150px'}} title='UPPER CASE'>Upper Case</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleLowerCase} style={{width:'150px'}} title='lower case'>Lower Case</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleCapitalCase} style={{width:'150px'}} title='Capital Case'>Capital Case</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleInverseCase} style={{width:'150px'}} title='iNNVERSE cASE'>Inverse Case</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleAlternativeCase} style={{width:'150px'}} title='AlTeRnAtIvE CaSe'>Alternative Case</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleCopy} style={{width:'180px'}} title='Copy'>Copy</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleRemoveXtraSpace} style={{width:'180px'}} title='Remove Extra Space'>Remove Extra Space</button>
                <button className={`btn btn-${props.mode.mode==='light'?'light':'dark'} mx-2`} onClick={handleClear} style={{width:'180px'}} title='Clear'>Clear</button>
            </div>
            <div>
                <TextAnalysisOutput mode={props.mode} title={'Result'} result={result} text={text} />
            </div>
        </div>
    </>
  )
}

Home.propTypes={
    mode:Object
};

