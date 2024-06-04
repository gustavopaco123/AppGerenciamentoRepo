import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pagesProjeto/Main';
import Repositorio from './pagesProjeto/Repositorio';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/repositorio/:repositorio" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
