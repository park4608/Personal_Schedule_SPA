import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as S from '../components/styled-component/TodoComponent';
import axios from 'axios';

const FormFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 48px;
`;
type Todo = {
  date: string;
  content: string;
};

function Form() {
  const [inputs, setInputs] = useState<Todo>({
    date: '',
    content: '',
  });
  const inputRef = useRef<null[] | HTMLInputElement[]>([]);

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let data = {
        date: inputRef.current[0]?.value,
        contents: inputRef.current[1]?.value,
      };

      axios.post('http://localhost:8080/formPage', data).then((res) => {
        console.log(res);
      });

      onReset();
    }
  };

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputs({
      ...inputs,
      [e.target.name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      date: '',
      content: '',
    });
  };

  return (
    <FormFrame>
      <form action='http://localhost:8080/formPage' method='POST'>
        <S.ToDoInput
          name='date'
          value={inputs.date}
          placeholder='날짜를 입력해주세요'
          ref={(is) => (inputRef.current[0] = is)}
          onChange={OnChange}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => activeEnter(e)}
        />
        <S.ToDoInput
          name='content'
          value={inputs.content}
          placeholder='할 일을 입력해주세요'
          ref={(is) => (inputRef.current[1] = is)}
          onChange={OnChange}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => activeEnter(e)}
        />
      </form>
    </FormFrame>
  );
}

export default Form;
