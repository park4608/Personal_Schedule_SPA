import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Ex() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>('');

  const fetchData = async () => {
    const response = await axios.get(url);
    setText(response.data[0].name);
    console.log('fetched');
  };
  useEffect(() => {
    console.log('inputRef');
    console.log(inputRef.current);
    if (inputRef.current !== null) {
      inputRef.current.value = '';
      // console.log('useeffect');
    }
    fetchData();
  }, [text]);

  const url = 'http://localhost:5000/api';
  const postData = () => {
    if (inputRef.current !== null) {
      const curValue = inputRef.current.value;
      axios.post(url, { curValue }).then((result) => {
        if (inputRef.current !== null) {
          setText(inputRef.current.value);
          inputRef.current.value = '';
          // console.log(result);
        } else {
          // console.log('null');
        }

        fetchData();
      });
    }
  };

  return (
    <div>
      <input name='text' ref={inputRef} />
      <button onClick={postData}>전송</button>
      <h3>{text}</h3>
    </div>
  );
}

export default Ex;
