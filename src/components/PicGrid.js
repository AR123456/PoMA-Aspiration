import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Button
} from "reactstrap";

class PicGrid extends React.Component {
  render() {
    return (
      <Container>
        <Row>{/* <Col>.col</Col> */}</Row>
        <Row>
          {/* <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col> */}
        </Row>
        <Row>
          {/* <Col xs="3">.col-3</Col>
          <Col xs="auto">.col-auto - variable width content</Col>
          <Col xs="3">.col-3</Col> */}
        </Row>
        <Row>
          {/* <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col> */}
        </Row>
        <Row>
          <Col xs="6" sm="4">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              <Button>Button</Button>
            </Card>
          </Col>
          <Col xs="6" sm="4">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              <Button>Button</Button>
            </Card>
          </Col>
          <Col xs="6" sm="4">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              <Button>Button</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              <Button>Button</Button>
            </Card>
          </Col>
          <Col xs="6" sm="4">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              <Button>Button</Button>
            </Card>
          </Col>
          <Col xs="6" sm="4">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
              <Button>Button</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <Col sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col> */}
        </Row>
        <Row>
          {/* <Col sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3
          </Col> */}
        </Row>
        <Row>
          {/* <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col> */}
        </Row>
      </Container>
    );
  }
}
export default PicGrid;
