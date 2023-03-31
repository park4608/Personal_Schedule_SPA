import { useState, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const OverflowHiddenDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const ColumnBox = styled.div`
  padding: 5px 2px;
`;

export const FrameTitle = styled.h3`
  align-items: center;
  font-size: 18px;
  padding-top: 5px;
  color: #000;
  position: sticky;
  top: 0;
`;

export const Frame = styled.div`
  padding: 5px 16px;
  height: 310px;
  min-width: 270px;
  max-width: 450px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background-color: #fff;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
  }
`;

// export const CalendarFrame = styled.div`
//   height: 600px;
//   /* border: 1px solid black; */
// `;

export const StyledCheckBox = styled.input`
  appearance: none;
  min-width: 16px;
  width: 16px;
  height: 16px;
  border: 2.5px solid gainsboro;
  border-radius: 0.2rem;

  &:checked {
    border-color: transparent;
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;

// const EditInput = styled.input`
//   width: 100%;

//   &:focus {
//     outline: none;
//   }
// `;

type EditInputProps = {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
};

const CustomInput = styled.input`
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const EditInput = ({ value, onChange, onFocus, onBlur }: EditInputProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    console.log('focused');
    inputRef.current?.focus();
  }, []);

  return <CustomInput ref={inputRef} type='text' value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} style={{ width: '100%' }} spellCheck='false' />;
};

type Content = {
  content: string | undefined;
  idx: string | undefined;
};

export const TodoElement = ({ content, idx }: Content) => {
  const [text, setText] = useState<string | undefined>(content);
  const [initialText, setInitial] = useState<string | undefined>(content);
  const [editable, setEditable] = useState<boolean>(false);

  const goEdit = () => {
    setEditable(true);
  };

  const finishEdit = () => {
    if (text?.trim() === '') {
      setText(initialText);
    } else {
      setInitial(text);

      let data = { content: text, idx: idx };
      const postData = async () => {
        await axios.put(`http://localhost:8080/list/${idx}`, data);
      };

      postData();
    }
    setEditable(false);
  };

  return (
    <>
      {editable ? (
        <EditInput
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
          data-idx={idx}
          onFocus={() => setInitial(text)}
          onBlur={() => finishEdit()}
        />
      ) : (
        <ListContents onClick={() => goEdit()}>{text} </ListContents>
      )}
    </>
  );
};

export const ListContents = styled(OverflowHiddenDiv)`
  width: 100%;
  text-align: left;
`;

export const StyledLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 4px;
  /* margin: 0 4px; */
  font-size: 16px;
  border-radius: 3px;

  &:hover {
    background-color: rgba(219, 219, 219, 0.6);
  }
`;

export const FrequentTodo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  text-align: left;
`;

export const TextHiddenLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 0;
`;
export const ToDoInput = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    /* outline: none; */
    border-color: #4096ff;
    border-inline-end-width: 1px;
  }

  &::placeholder {
    color: #bfbfbf;
  }

  &:focus {
    outline: none;
    border-color: #4096ff;
  }
`;

// type ToDoType = { date: string; data: string[] }[];
type ListType = { date: string; data: string[] };

export const ToDoList = ({ Todos }: { Todos: ListType }) => {
  const [toDoList, settoDoList] = useState<string[]>(Todos.data);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputRef.current !== null) {
      setValue(inputRef.current.value);
      inputRef.current.value = '';
      console.log(value);
      settoDoList([...toDoList, value]);
    }
  };

  return (
    <>
      <div style={{ position: 'sticky', top: 0, paddingBottom: '5px' }}>
        <FrameTitle>{Todos.date}</FrameTitle>
        <ToDoInput
          placeholder='할 일을 입력해주세요'
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => activeEnter(e)}
        />
      </div>
      {toDoList.map((item: string, i: number) => {
        return (
          <>
            <StyledLabel>
              <StyledCheckBox type='checkbox' name='checkbox' />
              <ListContents>{item}</ListContents>
            </StyledLabel>
          </>
        );
      })}
    </>
  );
};

const TableFrame = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
`;

export const FocusBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 99;
`;

export const StyledInput = styled.input<{ width: string }>`
  width: ${(props) => props.width};
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 7px 0;
  border-bottom: 1px solid #ccc;

  & ~ ${FocusBorder} {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #1da1f2;
    transition: 0.4s;
  }

  &:focus {
    outline: none;
  }

  &:focus ~ ${FocusBorder} {
    width: 100%;
    transition: 0.4s;
  }
`;

interface Props {
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
  width: string;
}

export const TodoInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <StyledInput ref={ref} name={props.name} placeholder={props.placeholder} onChange={props.onChange} onKeyDown={props.onKeyDown} value={props.value} width={props.width} />
        <FocusBorder />
      </div>
    </>
  );
});
