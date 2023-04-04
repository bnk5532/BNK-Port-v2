import React from "react";
import biWidget from "../../assets/images/biWidget.png";
import widgetPBI from "../../assets/ppt/BrianWidgetCoPBI.pptx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Dashboard() {
  const dashboards = [
    {
      title: "Brian's Widget Company",
      description: "Example of a Microsoft Power BI dashboard visualization.",
      ppt: widgetPBI,
      link: "https://app.powerbi.com/links/i3DrsJjcqI?ctid=005cca83-53fe-4863-8898-aea70d2bafa2&pbi_source=linkShare&bookmarkGuid=22a1e858-af70-4f7e-846d-d7f510522361&portalSessionId=5455c33b-e32a-4ebb-a5b8-8f044c167af1&fromEntryPoint=share",
      iconMicro: <i className="fa-brands fa-microsoft icons"></i>,
      iconChart: <i className="fa-solid fa-chart-line icons"></i>,
      src: biWidget,
    },
  ];

  return (
    <Container fluid>
      <Row>
        {dashboards.map((dashboard) => {
          return (
            <Col
              className="p-3 d-flex justify-content-center"
              key={dashboard.title}
            >
              <Card style={{ width: "18rem" }}>
                <a href={dashboard.link} target="_blank" rel="noreferrer">
                  <Card.Img
                    variant="top"
                    src={dashboard.src}
                    style={{ height: "10rem" }}
                  />
                </a>

                <Card.Body>
                  <Card.Title>
                    {dashboard.title}
                    <Card.Link
                      href={dashboard.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fa-solid fa-file-powerpoint"></i>
                    </Card.Link>
                  </Card.Title>
                  <Card.Text>{dashboard.description}</Card.Text>
                  <Card.Text className="icons">
                    {dashboard.iconMicro}
                    {dashboard.iconChart}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br></br>
      <br></br>
    </Container>
  );
}

export default Dashboard;
