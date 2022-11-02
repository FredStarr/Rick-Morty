import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col, Row, Form, FormGroup, Label, Input
} from 'reactstrap';
import { getAllAllPersons } from '../../redux/actions/AllAllPersons';
import { getPerson } from '../../redux/actions/ApiSagaActions';
import MyCard from '../Card/Card';

export default function AllPersons() {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const All = useSelector((state) => state.all);
  useEffect(() => {
    for (let i = 1; i <= 42; i += 1) {
      dispatch(getAllAllPersons(i));
    }
  }, []);

  useEffect(() => {
    if (input.input) {
      dispatch(getPerson(input));
    }
  }, [input]);

  return (
    <div>
      <Col>
        <Form>
          <FormGroup>
            <Label>Words</Label>
            <Input
              type="text"
              name="input"
              value={input.input || ''}
              onChange={changeHandler}
            />
          </FormGroup>
        </Form>
      </Col>
      <Row>

        {All.map((el) => (
          <MyCard
            key={el.id}
            img={el.image}
            name={el.name}
            id={el.id}
          />
        ))}
      </Row>
    </div>

  );
}
