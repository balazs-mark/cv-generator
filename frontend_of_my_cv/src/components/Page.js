import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Image, Row} from 'react-bootstrap'
import "../styles/page.css"
import cake_icon from "../icons/cake.png"
import map_icon from "../icons/colourful_location_pin_with_map.png"
import phone_icon from "../icons/telefon.png"
import envelope_icon from "../icons/boríték.png"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkype, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fetchContent } from "../actions/fetchContent"
import Loader from './Loader'
import Message from './Message'
library.add(faSkype)
library.add(faGithub)


// TODO: Change <a> to <Link>
// TODO: Create module for info part items (icon, text)
// FIXBUG: New line character come as "\\n" from API --> if fixed remove the replacing


function Page (language, cv_type) {

    const dispatch = useDispatch()
    const fetched_content = useSelector(state => state.fetched_content)
    const { error, loading, general, personal_infos, datas } = fetched_content

    useEffect(() => {
        dispatch(fetchContent(language, cv_type))
    }, [dispatch])


    return (
        <Container className="cv-page" id="cvContent">
            
            {loading ? <Loader />
                : error ? 
                    error === "Network Error" ?
                        <Container>
                            <h1 style={{ marginTop: "8rem" }}>{ error }</h1>
                            <Row style={{ fontSize: "1.5rem", marginTop: "4rem", textAlign: "center" }}>Maybe the backend server is down.</Row>
                        </Container>
                        :
                        <Message variant='danger'>{error}</Message>
                    :
                    <Container>

                        <h1 id="main-title">{ general.title }</h1>
                        
                        <a href={ "/static" + personal_infos.path_to_my_large_photo } target="_blank" rel="noopener noreferrer">
                            <Image
                                id="photo"
                                className="photo"
                                src={ "/static" + personal_infos.path_to_my_small_photo }
                                alt={ personal_infos.my_photo_alt }
                            />
                        </a>
                        <div id="QRcodeContainer"></div>
                        
                        <Container className="info">
                            <Container id="name">{ personal_infos.name }</Container>
                            <Row style={{ padding: "0.1rem" }}>
                                <Col style={{ width: "32px", display: "inline-block" }}>
                                    <Image src={cake_icon} className="icon" />
                                </Col>
                                <Col style={{ display: "inline-block" }}>
                                    { personal_infos.birthday }
                                </Col>
                            </Row>
                            <Row style={{ padding: "0.1rem" }}>
                                <Col style={{ width: "32px", display: "inline-block" }}>
                                    <Image src={map_icon} className="icon" />
                                </Col>
                                <Col style={{ display: "inline-block" }}>
                                    <a target="_blank" rel="noopener noreferrer" href={ personal_infos.google_maps_link_for_address }>{ personal_infos.address }</a>                    
                                </Col>
                            </Row>
                            <Row style={{ padding: "0.1rem" }}>
                                <Col style={{ width: "32px", display: "inline-block" }}>
                                    <Image src={phone_icon} className="icon" />
                                </Col>
                                <Col style={{ display: "inline-block" }}>
                                    <a href={ "tel:" + personal_infos.phone_number }>{ personal_infos.phone_number }</a>
                                </Col>
                            </Row>
                            <Row style={{ padding: "0.1rem" }}>
                                <Col style={{ width: "32px", display: "inline-block" }}>
                                    <Image src={envelope_icon} className="icon envelope" />
                                </Col>
                                <Col style={{ display: "inline-block" }}>
                                    <a href={ "mailto:" + personal_infos.email }>{ personal_infos.email }</a>
                                </Col>
                            </Row>
                            <Row style={{ padding: "0.1rem" }}>
                                <Col style={{ width: "32px", display: "inline-block" }}>
                                    <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'skype' }} color="dodgerblue" size="2x" />
                                </Col>
                                <Col style={{ display: "inline-block" }}>
                                    <a className="skype-link" href={ "skype:" + personal_infos.skype }>{ personal_infos.skype }</a>
                                </Col>
                            </Row>
                            <Row style={{ padding: "0.1rem" }}>
                                <Col style={{ width: "32px", display: "inline-block" }}>
                                    <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'github' }} size="2x" />
                                </Col>
                                <Col style={{ display: "inline-block" }}>
                                    <a className="skype-link" href={ "https://github.com/" + personal_infos.github }>{ personal_infos.github }</a>
                                </Col>
                            </Row>
                        </Container>

                        
                        { datas.map(block => (
                            <Container className="new-block">
                                <Container style={{ display: "inline" }}>
                                    <hr  style={{ width: "33%", display: "inline-block" }} />
                                    <h2 style={{ paddingRight: "2%", paddingLeft: "2%", width: "29%", display: "inline-block" }}>{ block.category }</h2>
                                    <hr  style={{ width: "33%", display: "inline-block" }} />
                                </Container>
                                { block.list.map(other => (
                                    other.date != null ?
                                        <Row>
                                            <Col style={{ width: "32%", display: "inline-block" }}>{ other.date }</Col>
                                            <Col style={{ display: "inline-block", marginBottom: "0.5rem"}} className="multi-line">
                                                { other.path_to_the_document != null ?
                                                    <a href={ "/static" + other.path_to_the_document } target="_blank" rel="noopener noreferrer">{ other.text.replace(/\\n/g, "\n") }</a>
                                                :
                                                    // Replace "\\n" with "\n" in all matches by using Regex
                                                    // Regex syntax to find all matches with JavaScript -->   /<string>/g 
                                                    other.text.replace(/\\n/g, "\n")
                                                }
                                            </Col>
                                        </Row>
                                    :
                                        (other.path_to_the_document != null) ?
                                            <Row className="list"><a href={ "/static" + other.path_to_the_document } target="_blank" rel="noopener noreferrer">{ other.text }</a></Row>
                                        :
                                            <Row className="list multi-line">{ other.text }</Row>
                                    )
                                )}
                            </Container>
                            )) 
                        }
                    </Container>
                }
        </Container>
    )
}


export default Page
