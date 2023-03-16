import React, { useState } from 'react';

type State = {
  x: String;
};

function DataManagement() {
  const [state, setState] = useState<String>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  onclick = () => {
    const textbox = {
      inText: state,
    };
    fetch('http://localhost:5000/test', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    })
      .then((res) => res.json()) //추가된 부분
      .then((json) => {
        console.log(json);
        setState(json.text);
      });
  };

  return (
    <div>
      <input name='text' onChange={handleChange}></input>
      <button>전송</button>
      <h3>{state}</h3>
    </div>
  );
}

export default DataManagement;
