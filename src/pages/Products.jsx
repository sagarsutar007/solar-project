import { Container, Row, Col } from "react-bootstrap";
import MainFooter from "../components/MainFooter";
import MainNavBar from "../components/MainNavBar";
import MyBreadcrumb from "../components/MyBreadcrumb";
import ProductCard from "../components/ProductCard";

const Products = () => {
    return (
        <>
            <MainNavBar />
            <MyBreadcrumb pagename="Products" />
            <Container className="my-5">
                <Row>
                    <Col lg={3} md={6}>
                        <ProductCard title="4Kw Battery" text="Highly effcient battery last for 8hrs for a single room" />
                    </Col>
                    <Col lg={3} md={6}>
                        <ProductCard title="5Kw Battery" text="Highly effcient battery last for 10hrs for a single room" />
                    </Col>
                    <Col lg={3} md={6}>
                        <ProductCard title="10Kw Battery" text="Highly effcient battery last for 20hrs for a single room" />
                    </Col>
                    <Col lg={3} md={6}>
                        <ProductCard title="15Kw Battery" text="Highly effcient battery last for 30hrs for a single room" />
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col lg={3} md={6}>
                        <ProductCard title="Single Panel" text="Highly effcient battery last for 8hrs for a single room" />
                    </Col>
                    <Col lg={3} md={6}>
                        <ProductCard title="Double Panel" text="Highly effcient battery last for 10hrs for a single room" />
                    </Col>
                    <Col lg={3} md={6}>
                        <ProductCard title="Battery Station" text="Highly effcient battery last for 20hrs for a single room" />
                    </Col>
                    <Col lg={3} md={6}>
                        <ProductCard title="Utility Wire" text="Highly effcient battery last for 30hrs for a single room" />
                    </Col>
                </Row>
            </Container>
            <MainFooter />
        </>
    );
}

export default Products;