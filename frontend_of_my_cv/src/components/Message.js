import React from 'react'
import { Alert } from 'react-bootstrap'


function Message({ variant, children }) {
    return (
        <Alert variant={variant} className="mt-5">
            {children}
        </Alert>
    )
}

export default Message
