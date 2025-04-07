import React from "react";
import { Spinner, Alert } from "react-bootstrap";

const Asset = ({ spinner, src, message }) => {
  if (spinner) {
    return <Spinner animation="border" />;
  }

  if (src) {
    return <Alert variant="info">{message}</Alert>;
  }

  return null;
};

export default Asset;
