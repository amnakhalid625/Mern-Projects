import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import './index.css';
import Teacher from './components/Teacher';
import Login from './components/Login';
import MainPage from './components/MainPage';
import SettingPage from './components/SettingPage';
import CreateCourse from './components/CreateCourse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/create" element={<CreateCourse />} />



        <Route path="/" element={<Register  studentText="Student" teacherText="Teacher"/>}  />

      </Routes>
    </Router>
  );
};

export default App;

