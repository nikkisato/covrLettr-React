import React from 'react';
import InputForm from '../InputForm/InputForm';
import PropTypes from 'prop-types';
import questions from  '../../questions.js';
import styles from './Form.css';

const Form = ({ onSubmit }) => {
  const inputFormElements = questions.map(({ nameOfQuestion, question, placeholder }, i) => (
    <InputForm key={i} nameOfQuestion={nameOfQuestion} question={question} placeholder={placeholder} />
  ));

  return (
    <section className={styles.Form}>
      <form>
        {inputFormElements}
        <input type="reset"  name="ResetButton" value="Reset"></input>
        <button onSubmit={onSubmit} >Create <br/> Covr Lettr</button>
      </form>
    </section>
  );
    
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;

