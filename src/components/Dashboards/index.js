import React from "react";
import biWidget from "../../assets/images/biWidget.png";
import bbPetHealth2 from "../../assets/images/bbpethealth2.png";
import widgetPBI from "../../assets/ppt/BrianWidgetCoPBI.pptx";
import dataStudioBWC from "../../assets/images/dataStudioBWC.png";
import abtrack from "../../assets/images/abtrack.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Dashboard() {
  const dashboards = [
    {
      title: "Boru's Pet Health Co.",
      description: "Example of a Google Looker Studio dashboard visualization.",
      link: "https://lookerstudio.google.com/reporting/2ec21757-c81b-4ccd-8b2c-24373b6d4d34",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      iconChart: <i className="fa-solid fa-chart-pie icons"></i>,
      src: bbPetHealth2,
    },
    {
      title: "Boru's Widget Co.",
      description: "Example of a Google Looker Studio dashboard visualization.",
      link: "https://lookerstudio.google.com/reporting/0dbbdb1b-db73-4d52-9358-98cbe40ae6e9",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      iconChart: <i className="fa-solid fa-chart-pie icons"></i>,
      src: dataStudioBWC,
    },
    {
      title: "Brian's Widget Co.",
      description: "Example of a Microsoft Power BI dashboard visualization.",
      ppt: widgetPBI,
      link: "https://app.powerbi.com/links/i3DrsJjcqI?ctid=005cca83-53fe-4863-8898-aea70d2bafa2&pbi_source=linkShare",
      iconMicro: <i className="fa-brands fa-microsoft icons"></i>,
      iconChart: <i className="fa-solid fa-chart-pie icons"></i>,
      src: biWidget,
    },
    {
      title: "Absence Tracker",
      description:
        "A Sheets tool created with pivots, slicers & logic functions.",
      link: "https://docs.google.com/spreadsheets/d/1cFaSrSlWvoaoVg7xsuF6xe7BPfp28miRoQBataeqOXc/edit?usp=sharing",
      iconGoogle: <i className="fa-brands fa-google icons"></i>,
      iconChart: <i className="fa-solid fa-chart-pie icons"></i>,
      src: abtrack,
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
                    {/* <Card.Link
                      href={dashboard.ppt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fa-solid fa-file-powerpoint"></i>
                    </Card.Link> */}
                  </Card.Title>
                  <Card.Text>{dashboard.description}</Card.Text>
                  <Card.Text className="icons">
                    {dashboard.iconMicro}
                    {dashboard.iconGoogle}
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
