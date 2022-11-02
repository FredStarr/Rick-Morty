import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  CardBody, CardTitle, CardSubtitle, Row, Col, Card
} from 'reactstrap';

export default function PersonInfo() {
  const [personId, setPersonId] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setPersonId(res.data));
  }, []);
  return (
    <Row>
      <Col>
        <Card
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src={personId.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {personId.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {personId.gender}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {personId.species}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {personId.status}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {personId.location?.name}
            </CardSubtitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {personId.created}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
