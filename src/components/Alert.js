import React from 'react'
// import AlertContext from '../context/alert/AlertContext'
// import { useContext } from 'react'


const Alert = () => {

    // const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)
    // const alert = useContext(AlertContext).alert

    // return (
    //     alert && 
    //     <div className="container">
    //         <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
    //             <strong>{capitalize(alert.type)}</strong>:  {alert.msg}
    //         </div>
    //     </div>
    // )

    const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)
    
    return (
        alert && 
        // <div className="container">
            <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
                <strong>{capitalize(`Success`)}</strong>:  {"Default alert"}
            </div>
        // </div>
    )
}

export default Alert