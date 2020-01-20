import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { errorValidationFormAddTweetAction } from "../actions/errorValidationActions";
import { addTweetAction } from "../actions/tweetsAction";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import uuid from "uuid/v4";
import moment from "moment";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: ""
  });

  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();

  const errorForm = state => {
    dispatch(errorValidationFormAddTweetAction(state));
  };

  const addTweet = state => {
    dispatch(addTweetAction(state));
  };

  const closeModal = state => {
    dispatch(openCloseAddTweetModalAction(state));
  };

  // Fin dispatch

  const errorFormValue = useSelector(
    state => state.errorValidations.errorFormAddTweet
  );

  const onChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const { name, tweet } = formValue;

    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment()
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group className="text-center">
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="name"
          placeholder="Escribre tu nombre"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          rows="3"
          placeholder="Escribre lo que quieras comunciar"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar Tweet
      </Button>
      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
