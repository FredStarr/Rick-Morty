import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, Input
} from 'reactstrap';
import { getAllPersons } from '../../redux/actions/allPersonActions';
import MyCard from '../Card/Card';

export default function MyInput() {
  const person = useSelector((store) => store.id || store.name);

  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllPersons(input));
  };
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        onChange={inputHandler}
        value={input}
      />
      <Button type="submit">
        Search
      </Button>
      {person
        && person.map((el) => (
          <MyCard
            key={el.id}
            img={el.image}
            name={el.name}
            id={el.id}
          />
        ))}
    </Form>
  );
}
