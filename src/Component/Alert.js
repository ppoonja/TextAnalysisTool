import React from 'react'

export default function Alert(props) {
  return (
      props.alert && <div style={{position:'absolute', float:'right'}} className="alert alert-primary" role="alert">
        {props.alert.msg}
      </div>
  )
}
