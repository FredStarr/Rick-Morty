import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AllPersons from './components/AllPersons/AllPersons';

import MyInput from './components/Input/Input';
import Liked from './components/Liked/Liked';
import MyNavBar from './components/Navbar/Navbar';
import PersonInfo from './components/PersonInfo/PersonInfo';

function App() {
  return (

    <Container>
      <MyNavBar />
      <Routes>
        <Route path="/liked" element={<Liked />} />
        <Route path="/:id" element={<PersonInfo />} />
        <Route path="/" element={<MyInput />} />
        <Route path="/all" element={<AllPersons />} />
      </Routes>
    </Container>

  );
}

export default App;
