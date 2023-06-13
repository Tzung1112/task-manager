import React, { useState, useEffect } from 'react';
import './App.css';
import TaskHeader from './component/TaskHeader';
import TaskBody from './component/TaskBody';

export default function Header() {
  const [inputValue, setInputValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [selectValue, setSelectValue] = useState('Fulfill');
  const [otherInputValue, setOtherInputValue] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  const handleOtherInputChange = (e) => {
    setOtherInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      input: inputValue,
      date: dateValue,
      select: selectValue,
      otherInput: otherInputValue,
    };
    setDataList([...dataList, newData]);
    setInputValue('');
    setDateValue('');
    setSelectValue('Fulfill');
    setOtherInputValue('');
  };
  useEffect(() => {
    const savedData = localStorage.getItem('dataList');
    if (savedData) {
      setDataList(JSON.parse(savedData));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('dataList', JSON.stringify(dataList));
  }, [dataList]);
  const handleDelete = (id) => {
    const updatedList = dataList.filter((item) => item.id !== id);
    setDataList(updatedList);
  };
  return (
    <div className='header'>
     <div className='task'>
        <TaskHeader handleSubmit={handleSubmit} inputValue={inputValue} 
          handleInputChange={handleInputChange} dateValue={dateValue}
          handleDateChange={handleDateChange} selectValue={selectValue}
          handleSelectChange={handleSelectChange} otherInputValue={otherInputValue}
          handleOtherInputChange={handleOtherInputChange}
        ></TaskHeader>
        <TaskBody dataList={dataList}></TaskBody>
     </div>
    </div>
  );
}