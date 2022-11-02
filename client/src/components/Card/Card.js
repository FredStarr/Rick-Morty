import React from 'react';
import {
  CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col, Card
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLikes, removeLikes } from '../../redux/actions/likeAction';

export default function MyCard({ img, name, id }) {
  const dispatch = useDispatch();
  const likes = useSelector((store) => store.likes);
  let likeBtn = 'btn btn-outline-info';

  const likeHandler = (e) => {
    const checkLike = likes.find((el) => el.id === id);
    if (!checkLike) {
      dispatch(addLikes({ img, name, id }));
      likeBtn = 'btn btn-danger';
      e.target.className = likeBtn;
    }
    if (checkLike) {
      dispatch(removeLikes(id));
      e.target.className = 'btn btn-outline-secondary';
    }
  };
  return (

    // <div className="d-flex justify-content-around">
    <Card
      style={{
        width: '18rem',
        margin: '20px',
        border: 'none'
      }}
    >
      <img
        alt="Sample"
        src={img}
      />
      <CardBody style={{ border: '1px solid #ffc107' }}>
        <CardTitle tag="h5">
          {name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {id}
        </CardSubtitle>
        <Link to={`/${id}`}>
          <Button>
            Info
          </Button>
        </Link>
        <button onClick={likeHandler} type="button" className={likeBtn}>
          ❤️
        </button>
      </CardBody>
    </Card>
    // </div>
  );
}
