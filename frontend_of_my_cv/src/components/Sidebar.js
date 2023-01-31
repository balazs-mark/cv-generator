import React, { useEffect } from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Image, Row } from 'react-bootstrap'
import "../styles/sidebar.css"
import hamburger_menu_icon from "../icons/blue_hamburger_icon.png"
import { fetchSidebar } from "../actions/fetchSidebar"
import generatePDFwithQRcode from "../actions/generatePDF"
import Loader from './Loader'
import Message from './Message'


function Sidebar(language, cv_type) {

    const dispatch = useDispatch()
    const fetched_sidebar = useSelector(state => state.fetched_sidebar)
    const { error, loading, list_of_sidebar_buttons } = fetched_sidebar

    useEffect(() => {
        dispatch(fetchSidebar(language, cv_type))
    }, [dispatch])


    function get_browser_details () {
        console.log(navigator.userAgent)
    }
    get_browser_details()

    var show_sidebar_default_value
    var show_hamburger_icon_default_value
    function set_default_values_for_sidebar_hiding () {
        if (window.screen.width > 1024) {
            show_sidebar_default_value = ""
            show_hamburger_icon_default_value = "none"
        } else {
            show_sidebar_default_value = "none"
            show_hamburger_icon_default_value = ""
        }
    }
    set_default_values_for_sidebar_hiding()

    const [show_sidebar, setSidebarShow] = useState(show_sidebar_default_value);
    const [show_hamburger_icon, setHamburgerIconShow] = useState(show_hamburger_icon_default_value);
    
    function hideSidebar () {
        setSidebarShow('none');
        setHamburgerIconShow('');
    }

    function showSidebar () {
        setSidebarShow('');
        setHamburgerIconShow('none');
    }

    return (
        <Container>
            
            {loading ?
                <Loader />
                : error ?
                    <Message variant='danger'>{error}</Message>
                    :
                    <Container>

                        <Image id="hamburger_menu_icon" alt="hamburger_menu_icon" src={hamburger_menu_icon} style={{ display: show_hamburger_icon }} onClick={ showSidebar } />
                                
                        <Container id="sidebar" style={{ display: show_sidebar }}>

                            { list_of_sidebar_buttons.map(button => (
                                button.button_id  === "hide_sidebar" ?
                                    <Row className="sidebar_link" onClick={ hideSidebar }>
                                        <Image id={ button.button_id } className="sidebar_icon" alt={ button.alt_for_icon } src={ button.path_of_icon } />
                                        <span className="sidebar_text">{ button.text_on_button }</span>
                                    </Row>
                                :
                                    button.button_id  === "open_as_pdf" ?
                                        <Row className="sidebar_link" onClick={ generatePDFwithQRcode }>
                                            <Image id={ button.button_id } className="sidebar_icon" alt={ button.alt_for_icon } src={ button.path_of_icon } />
                                            <span className="sidebar_text">{ button.text_on_button }</span>
                                        </Row>
                                        : 
                                        button.button_id === "change_language" ?
                                            <Row className="sidebar_link" onClick={ () => window.open(window.location.href.slice(0, -2) + button.path_to_open_on_click, "_self") }>
                                                <Image id={ button.button_id } className="sidebar_icon" alt={ button.alt_for_icon } src={"/static" + button.path_of_icon } />
                                                <span className="sidebar_text">{ button.text_on_button }</span>
                                            </Row>
                                            :
                                            button.button_id === "admin_area" ?
                                                <Row className="sidebar_link" style={{ verticalAlign: "bottom", marginBottom: "1rem" }} onClick={ () => window.open(button.path_to_open_on_click) }>
                                                    <Image id={ button.button_id } className="sidebar_icon" alt={ button.alt_for_icon } src={ button.path_of_icon } />
                                                    <span className="sidebar_text">{ button.text_on_button }</span>
                                                </Row>
                                                :
                                                <Row className="sidebar_link" onClick={ () => window.open(button.path_to_open_on_click) }>
                                                    <Image id={ button.button_id } className="sidebar_icon" alt={ button.alt_for_icon } src={ button.path_of_icon } />
                                                    <span className="sidebar_text">{ button.text_on_button }</span>
                                                </Row>

                                ))
                            }

                        </Container>
                    </Container>
            }
        </Container>
    )
}


export default Sidebar
