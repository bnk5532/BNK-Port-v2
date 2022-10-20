import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card style={{ width: "25rem" }}>
            <section className="form p-3">
              <h1 data-testid="h1tag">Contact me</h1>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name: &nbsp; </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                  />
                </div>
                <br></br>
                <div>
                  <label htmlFor="email">Email: &nbsp; </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                  />
                </div>
                <br></br>
                <div>
                  <label htmlFor="message">Message: &nbsp; </label>
                  <textarea
                    name="message"
                    rows="3"
                    defaultValue={message}
                    onBlur={handleChange}
                  />
                </div>
                <br></br>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                <Button variant="primary" data-testid="button" type="submit">
                  Submit{" "}
                </Button>
              </form>
            </section>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
