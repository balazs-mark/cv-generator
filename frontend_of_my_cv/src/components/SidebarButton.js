import React from 'react'
import "../styles/sidebar.css"
import { Row, Image } from 'react-bootstrap'


function SidebarButton(alt_for_icon, path_of_icon, text_on_button, on_click) {
    return (
        <Row className="sidebar_link" onClick={ on_click }>
            <Image className="sidebar_icon" alt={ alt_for_icon } src={ path_of_icon } />
            <span className="sidebar_text">{ text_on_button }</span>
        </Row>
    )
}


export default SidebarButton
