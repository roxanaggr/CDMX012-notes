import React from 'react'
import { useAlert } from 'react-alert'

export function Alertsave() {
    const alert = useAlert()
    
  return (
    <div>{alert.show("Alert test")}</div>
  )
}

export default Alertsave