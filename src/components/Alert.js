import React from 'react'

const Alert = (props) => {

    const {alert} = props

    return (
        alert &&
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.msg}
        </div>
    )
}

export default Alert