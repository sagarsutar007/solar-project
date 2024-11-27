import { Col, Container, Row } from "react-bootstrap";
import MainFooter from "../components/MainFooter";
import MainNavBar from "../components/MainNavBar";
import MyBreadcrumb from "../components/MyBreadcrumb";

function About() {
    return (
        <>
            <MainNavBar />
            <MyBreadcrumb pagename="About" />
            <Container className="my-5">
                <Row>
                    <Col>
                        <span className="text-primary">Know more about us</span>
                        <h3>We are the best Solar Panel Company in India</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore debitis laudantium, animi culpa quidem totam! Dignissimos nisi culpa quidem aperiam facere ab, repellat at dolore. Tenetur enim ullam modi vitae!</p>
                        <button className="btn btn-primary">Contact Us!</button>
                    </Col>
                    <Col>
                        <img src="https://placehold.co/1366x500" className="w-100" alt="" />
                    </Col>
                </Row>
            </Container>
            <MainFooter />
        </>
    );
}

export default About;