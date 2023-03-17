import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as S from '../components/styled-component/TodoComponent';
import axios, { AxiosResponse } from 'axios';
import day from 'dayjs';

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
  idx: string;
};

type todoList = {
  date: string | undefined;
  content: string | undefined;
  idx: string | undefined;
};

function Form() {
  const [inputs, setInputs] = useState<Todo>({
    date: '',
    content: '',
    idx: '',
  });

  const [todoList, setList] = useState<todoList[]>([]);
  // const [count, setCount] = useState<number>(todoList.length);

  const inputRef = useRef<null[] | HTMLInputElement[]>([]);

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let data = {
        date: inputRef.current[0]?.value,
        content: inputRef.current[1]?.value,
        idx: day().format('MMDDHH:mm:ss'),
      };

      axios.post('http://localhost:8080/formPage', data).then((res) => {
        // console.log(res);
        setList([...todoList, data]);
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
      idx: '',
    });
  };

  const deleteData = (e: React.MouseEvent<HTMLButtonElement>) => {
    let idx = e.currentTarget.getAttribute('data-idx');
    console.log('delete idx:' + idx);
    axios.delete(`http://localhost:8080/list/${idx}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/dailyTodo').then((res) => {
        setList(res.data);
      });
    };

    fetchData();
  }, [todoList]);

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
        <ul>
          {todoList.map((e, i) => (
            <li>
              <div>
                {e.content}
                <button type='button' style={{ backgroundColor: 'lightblue' }} onClick={deleteData} data-idx={e.idx}>
                  삭제하기
                </button>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </FormFrame>
  );
}

export default Form;
